const express = require("express")
const Route = express.Router()
const { User, SignInSchema, SignUpSchema, UpdateSchema } = require('../db')
const { authMiddlewares } = require('../middlewares/middlewares')
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
        const final_token = `Bearer ${generated_token}`
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
    const parsed = SignInSchema.safeParse({ firstname, lastname, email, phonenumber, password })

    if (!parsed.success) {
        return res.status(404).json({ message: "Bad Inputs" })
    }

    const userExist = await User.findOne({ firstname, lastname })
    if (!userExist) {
        return res.status(400).json("User doesnot Exist.")
    }
    
    try{
        const generated_token = JWTtoken(userExist)
        const final_token = `Bearer ${generated_token}`
        res.status(200).json({ mesage: `You Logged In.`,
            token :  final_token })

    }catch(err){
        res.status(403).json({})
    }


})

// update the porfile firtname, lastname and password.
Route.put('/update', authMiddlewares, async (req, res)=>{
    const data = req.body
    const parsed = UpdateSchema.safeParse(data)
    if(!parsed.success){
        return res.status(411).json("Bad Inputs")
    }
    await User.updateOne({_id:req.id}, data)
    res.status(200).json({message : "Updated Successfully"})
})

Route.get('/bulk', async(req, res)=>{
    const filter = req.query.filter || "" 
    const users = await User.find({
        $or : [{
            firstname : {
                $regex : filter
            }
        },{
            lastname : {
                $regex : filter
            }
        }]
    })

    res.status(200).json({                                    
        user : users.map(user =>({
            email : user.email,
            firstname : user.firstname,
            lastname : user.lastname,
            _id : user._id
        }))
    })
})

module.exports = Route