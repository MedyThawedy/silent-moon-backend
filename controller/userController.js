import { saveUser, userLogin } from "../services/userService.js";


export const registerUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await saveUser(user)
        console.log(result);
        res.status(200).json({ message: 'user added' })
    } catch (error) {
        res.status(500).json({ error: ('An' + error + 'Error happened') })
    }

    export const login = async (req, res) => {
        try {
        const user = req.body

        let result = await userLogin(user)
        console.log('result`:', result)

        if (result.password === user.password) {
            const token = createToken({ user: result._id,role: result.roles })
            res.status(200).json({ token: token })
        }
    } catch(err) {
            res.status(403).json({ err: 'Fehler beim Anmelden' })
        }
    }
}