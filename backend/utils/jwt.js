const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
dotenv.config()

const jwtSecret = "tilak_app";
const jwtExpiresIn = "1d";

console.log(jwtSecret);
console.log(jwtExpiresIn);


const JWTtoken = (user)=>{
    return jwt.sign({id : user._id}, jwtSecret, {expiresIn : jwtExpiresIn})
}

const JWTverify = (token) =>{
    return jwt.verify(token, jwtSecret)
}

module.exports = {JWTtoken, JWTverify}