import { verifyToken } from "../util/token.js";

export const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        // Immer wenn er jetzt den token verifiziert dann kann man die user id holen 
        // 
        req.body.user = result.user
        console.log(result.user);
        console.log(result);
        next()

    } catch (error) {
        console.log(error);
        res.status(403).json({ state: false })
    }
}