import { createHmac } from 'crypto'

// encrypt req.body.password
export const encryptThisPassword = (password) => {
    const hmac = createHmac('sha256', password)
    // hmac.update(salt)
    password = hmac.digest('hex')
    console.log(password);
    return password;
}

