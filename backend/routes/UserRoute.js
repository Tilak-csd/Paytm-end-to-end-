const express = require("express")
const Route = express.Router()
const { User, SignInSchema, SignUpSchema } = require('../db')

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
    res.status(200).json({ message: `Congratulation You have created an account, ${firstname}` })

})

module.exports = Route