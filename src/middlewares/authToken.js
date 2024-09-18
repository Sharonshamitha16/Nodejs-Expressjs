const jwt = require("jsonwebtoken")
const register = require("../models/register.model")
const generateToken = (userId) => {
    let token = jwt.sign({ id: userId }, process.env.JWT_KEY, { expiresIn: '1hr' })
    return token
}
const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(404).json({ message: "user must login...😒" })
    }
    let withouttoken = token.split(' ')[1]
    console.log("token", withouttoken);
    try {

        let payload = jwt.verify(withouttoken, process.env.JWT_KEY)
        console.log("data", payload.id);

        let checkUser = await register.findOne({ userId: payload.id })
        
        if (!checkUser) {
            return res.status(404).json({ message: "user not found" })
        }
        req.userId = checkUser.userId;
        next()
    } catch (error) {
        // if (error.name === 'TokenExpiredError') {
        //     // Highlighting this change to handle token expiration
        //     return res.status(401).json({ message: "Token expired, please login again." });
        // }

        res.json({ message: `Invalid Token ${error}`})
    }
}
module.exports = { generateToken, verifyToken }