const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
dotenv.config()

const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

const JWTtoken = (user)=>{
    return jwt.sign({id : user._id}, jwtSecret, {expiresIn : jwtExpiresIn})
}

const JWTverify = (token) =>{
    return jwt.verify(token, jwtSecret)
}

module.exports = {JWTtoken, JWTverify}