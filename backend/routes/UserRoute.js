const express = require("express")
const bcrypt = require("bcrypt");
const multer = require("multer")
const path = require("path")
const Route = express.Router()
const { User, Account, SignInSchema, SignUpSchema, NameSchema, PasswordSchema } = require('../db')
const { authMiddlewares } = require('../middlewares/middlewares')
const { JWTtoken } = require('../utils/jwt')
const upload = require("../multer/config")                  // multer config file


// Signup Backend logic
Route.post('/signup', async (req, res) => {
    const { firstname, lastname, email, password } = req.body
    const parsed = SignUpSchema.safeParse({ firstname, lastname, email, password })

    if (!parsed.success) {
        return res.status(404).json({ message: "Bad Inputs" })
    }

    const userExist = await User.findOne({ firstname, lastname })
    if (userExist) {
        return res.status(400).json("User Already Exist.")
    }
    const hasedPassword = await bcrypt.hash(password, 10)

    const NewUser = await User.create({
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : hasedPassword,
        avatar : firstname[0]
    })

    const UserId = NewUser._id
    // Auto Generating the Account wtih random Balance between  0 - 10,000.
    await  Account.create({
        userId : UserId,
        balance: 1 + (Math.random() * 10000)
    })

    try {
        const generated_token = JWTtoken(NewUser)
        const final_token = `Bearer ${generated_token}`
        res.status(200).json({
            message: `Congratulation You have created an account, ${firstname}`,
            token: final_token
        })
    } catch (error) {
        res.status(400).json("erroe")
    }

})

Route.post('/signin', async (req, res) => {
    const {email, password } = req.body
    const parsed = SignInSchema.safeParse({ email, password })

    if (!parsed.success) {
        return res.status(404).json({ message: "Bad Inputs" })
    }

    const userExist = await User.findOne({ email })
    if (!userExist) {
        return res.status(400).json({message: "User doesnot Exist."})
    }

    const isMatch = await bcrypt.compare(password, userExist.password)
    if(!isMatch){
        return res.status(500).json({message : "Password Don't Matched."})
    }

    try {
        const generated_token = JWTtoken(userExist)
        const final_token = `Bearer ${generated_token}`
        res.status(200).json({
            mesage: `You Logged In.`,
            token: final_token
        })

    } catch (err) {
        res.status(403).json({})
    }


})

// update the porfile firtname, lastname and password.
Route.put('/updateuser', authMiddlewares, async (req, res) => {
    const data = req.body
    const parsed = NameSchema.safeParse(data)
    if (!parsed.success) {
        return res.status(411).json("Bad Inputs")
    }
    await User.updateOne({ _id: req.id }, data)
    res.status(200).json({ message: "Updated Successfully" })
})

Route.put('/updatepassword', authMiddlewares, async (req, res) => {
    const data = req.body
    console.log(data);
    
    const parsed = PasswordSchema.safeParse(data)
    if (!parsed.success) {
        return res.status(411).json("Bad Inputs")
    }
    const newhasedPassword = await bcrypt.hash(data.password, 10)
    console.log(newhasedPassword);
    
    await User.updateOne({ _id: req.id }, {password : newhasedPassword})
    res.status(200).json({ message: "Updated Successfully" })
})

// Updating logic for the Avatar
Route.put('/updateAvatar', upload.single('avatar'), authMiddlewares, async(req, res)=>{
    const file = req.file
    if(!req.file){
        return res.status(400).json({message : "Somthing went Wrong"})
    }

    const filePath = file.filename
    await User.updateOne({_id: req.id}, {avatar : filePath})
    res.status(200).json({message : "Avatar Changed Successfully"})
})

// getting the user Account details
Route.get('/user', authMiddlewares, async(req, res)=>{
    const userid = req.id
    const userExist = await User.findOne({_id : userid})
    const accountExist = await Account.findOne({userId: userid})
    if(!userExist && !accountExist){
        return res.status(400).json("User doesn't exist")
    }
    res.status(200).json({
        firstname : userExist.firstname,
        lastname : userExist.lastname,
        balance : accountExist.balance,
        avatar : userExist.avatar
    })
})

Route.get('/bulk', async (req, res) => {
    const filter = req.query.filter || ""
    const users = await User.find({
        $or: [{
            firstname: {
                $regex: filter
            }
        }, {
            lastname: {
                $regex: filter
            }
        }]
    })

    res.status(200).json({
        user: users.map(user => ({
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            avatar : user.avatar,
            _id: user._id
        }))
    })
})


module.exports = Route