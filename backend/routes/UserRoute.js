const express = require("express")

const Route = express.Router()
const { User, Account, SignInSchema, SignUpSchema, UpdateSchema } = require('../db')
const { authMiddlewares } = require('../middlewares/middlewares')
const { JWTtoken } = require('../utils/jwt')

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

    const NewUser = await User.create({
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password
    })

    const UserId = NewUser._id

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

    const userExist = await User.findOne({ email, password })
    if (!userExist) {
        return res.status(400).json("User doesnot Exist.")
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
Route.put('/update', authMiddlewares, async (req, res) => {
    const data = req.body
    const parsed = UpdateSchema.safeParse(data)
    if (!parsed.success) {
        return res.status(411).json("Bad Inputs")
    }
    await User.updateOne({ _id: req.id }, data)
    res.status(200).json({ message: "Updated Successfully" })
})

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
        balance : accountExist.balance
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
            _id: user._id
        }))
    })
})


module.exports = Route