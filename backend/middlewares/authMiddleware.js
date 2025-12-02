const zod = require("zod")

const SignInSchema = zod.object({
    firstname : string(),
    lastname : string(),
    phonenumber : zod.string(),
    email : email(),
    password : string().min(8)
})

module.exports = {SignInSchema}