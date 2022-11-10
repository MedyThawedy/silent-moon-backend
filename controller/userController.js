import { saveUser } from "../services/userService.js";

export const registerUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await saveUser(user)
        console.log(result);
        res.status(200).json({ message: 'user added' })
    } catch (error) {
        res.status(500).json({ error: ('An' + error + 'Error happened') })
    }
}