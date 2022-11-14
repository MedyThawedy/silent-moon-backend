import { saveUser, findOneUserWithThisEmailAdress, findRelationUserFavoriteToYoga } from "../services/userService.js"
import validator from 'email-validator'
import { checkPasswordValidation } from "../util/dataValidator.js"
import { encryptThisPassword } from "../util/dataEncryptor.js"
import { createToken } from "../util/token.js";

export const registerUser = async (req, res) => {
    try {
        const user = req.body;
        // email validation
        const validMail = validator.validate(user.email)
        // password validation
        const validPassword = checkPasswordValidation(user.password)
        //console.log('PW Validation : ', validPassword)
        if ((validMail === true) && (validPassword === true) && (user.name !== null) && (user.surname !== null) && (user.name !== '') && (user.surname !== '')) {
            console.log('Email validation = ', validMail);
            const findUser = await findOneUserWithThisEmailAdress(user.email)
            //console.log(findUser)
            if (findUser) {
                res.status(400).send({ "Error": "Duplicate User detected, diese Email Adresse ist schon registriert" })
            } else {
                //req.body.password
                console.log('decrypted password = ', user.password)
                const encryptedPassword = encryptThisPassword(user.password)
                user.password = encryptedPassword;
                console.log('user with encrypted password', user);
                const result = await saveUser(user)
                console.log(result);
                res.status(200).json({ message: 'user added' })
            }
        } else {
            if (!validMail) {
                return res.status(400).send({ "Error": "Wrong Email Adress." })
            } else if (!validPassword) {
                return res.status(400).send({ "Error": "Wrong Password." })
            } else {
                return res.status(400).send({ "Error": "Wrong surname or username" })
            }
        }
    } catch (error) {
        res.status(500).json({ error: ('An' + error + 'Error happened') })
    }
}


export const loginUser = async (req, res) => {
    try {
        const user = req.body
        const findUser = await findOneUserWithThisEmailAdress(user.email)
        const encryptedPasswordFromReqBody = encryptThisPassword(req.body.password);
        console.log('The user is : ', findUser)
        if (findUser) {
            console.log('findUser User gefunden ', findUser)
            if (encryptedPasswordFromReqBody === findUser.password) {
                console.log('Password Überprüfung erfolgreich , ')
                console.log(encryptedPasswordFromReqBody)
                console.log(findUser.password)

                const token = createToken({ user: findUser._id })

                res.status(200).json({ token: token })
            }
            else {
                res.status(403).json({ message: '1 Wrong Login Data! Please try again! ' })
            }
        } else {
            res.status(403).json({ message: '2 Wrong Login Data! Please try again! ' })
            console.log('from loginUser', encryptedPasswordFromReqBody)
            console.log('from loginUser', typeof (encryptedPasswordFromReqBody))
            console.log('from loginUser', findUser.password)
            console.log('from loginUser', typeof (findUser.password))
        }
    } catch (error) {
        res.status(500).json({ error: ('An' + error + 'Error happened') })
    }

}


export const connectUserFavoriteYoga = async (req, res) => {
    const userid = req.body.userid;
    try {
        const result = await findRelationUserFavoriteToYoga(userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}