const express = require("express")
const Route = express.Router()
const { User, SignInSchema, SignUpSchema } = require('../db')
const { signInmiddlewares } = require('../middlewares/middlewares')
const { JWTtoken } = require('../utils/jwt')

Route.post('/signUp', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password } = req.body
    const parsed = SignUpSchema.safeParse({ firstname, lastname, email, phonenumber, password })

    if (!parsed.success) {
        return res.status(404).json({ message: "Bad Inputs" })
    }

    const userExist = await User.findOne({ firstname, lastname })
    if (userExist) {
        return res.status(400).json("User Already Exist.")
    }

    const NewUser = await new User({
        firstname,
        lastname,
        email,
        phonenumber,
        password
    })

    await NewUser.save()
    try {
        const generated_token = JWTtoken(NewUser)
        const final_token = `Barrier ${generated_token}`
        res.status(200).json({
            message: `Congratulation You have created an account, ${firstname}`,
            token: final_token
        })
    } catch (error) {
res.status(400).json("erroe")
    }

})

Route.post('/signIn', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password } = req.body
    const parsed = SignUpSchema.safeParse({ firstname, lastname, email, phonenumber, password })

    if (!parsed.success) {
        return res.status(404).json({ message: "Bad Inputs" })
    }

    const userExist = await User.findOne({ firstname, lastname })
    if (!userExist) {
        return res.status(400).json("User doesnot Exist.")
    }
    
    try{
        const generated_token = JWTtoken(NewUser)
        const final_token = `Barrier ${generated_token}`
        res.status(200).json({ mesage: `You Logged In.`,
            token :  final_token })

    }catch(err){
        res.status(403).json({})
    }


})


module.exports = Route