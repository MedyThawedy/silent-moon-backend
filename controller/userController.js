import { saveUser, findOneUserWithThisEmailAdress, findRelationUserFavoriteToYoga, findRelationUserFavoriteToMeditation, findRelationUserFavoriteToMusic, findUserById } from "../services/userService.js"
import validator from 'email-validator'
import { checkPasswordValidation } from "../util/dataValidator.js"
import { encryptThisPassword } from "../util/dataEncryptor.js"
import { createToken } from "../util/token.js"


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
                res.status(400).send({ message: "This email exists in our website" })
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
                return res.status(400).send({ message1: "Error caused by email field" })
            } else if (!validPassword) {
                return res.status(400).send({ message2: "Wrong Password! Password minimum length must be between 6 and 100 characters / it must have an uppercase letter, a lower uppercase letter and at least two digits " })
            } else {
                return res.status(400).send({ message3: "Registration failed! Wrong data! Please try again" })
            }
        }
    } catch (error) {
        res.status(500).json({ error: ('An' + error + 'Please try again! Wrong data') })
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
                // Here you can add the user_id
                res.status(200).json({
                    token: token,
                    user_id: findUser._id,
                    user_name: findUser.name
                })
            }
            else {
                res.status(403).json({ message: 'Login failed! Please try again! ' })
            }
        } else {

            res.status(403).json({ message: 'Login failed! Please try again! ' })
            //   console.log('from loginUser', encryptedPasswordFromReqBody)
            //   console.log('from loginUser', typeof (encryptedPasswordFromReqBody))
            //   console.log('from loginUser', findUser.password)
            //  console.log('from loginUser', typeof (findUser.password))
        }
    } catch (error) {
        res.status(403).json({ message: 'Login failed! Please try again! ' })
    }

}


export const connectUserFavoriteYoga = async (req, res) => {
    // const userid = req.body.userid;
    let query = req.query;
    let userid = query.id;

    try {
        const result = await findUserById(userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const connectUserFavoriteMeditation = async (req, res) => {
    // const userid = req.body.userid;
    const userid = req.params.id;
    try {
        const result = await findRelationUserFavoriteToMeditation(userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const connectUserFavoriteMusic = async (req, res) => {
    //const userid = req.body.userid;
    const userid = req.params.id;
    try {
        const result = await findRelationUserFavoriteToMusic(userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const finduser = async (req, res) => {
    //const userid = req.body.userid;
    const queryObj = req.query;
    const userid = queryObj.user_id;
    console.log(userid)
    try {
        const result = await findUserById(userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}