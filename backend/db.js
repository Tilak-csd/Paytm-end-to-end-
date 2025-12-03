const zod = require("zod")
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config()

const db_link = process.env.MONGOOSE_SERVER
mongoose.connect(db_link)


const SignInSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    phonenumber: zod.string(),
    email: zod.email(),
    password: zod.string().min(8)
})

const SignUpSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    phonenumber: zod.string(),
    email: zod.email(),
    password: zod.string().min(8)
})

const UpdateSchema = zod.object({
    firstname : zod.string(),
    lastname : zod.string(),
    phonenumber : zod.string(),
    password : zod.string().min(8)
})


const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: Number
})


const AccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required :true
    },
    balance :{
        type : Number,
        required : true
    }
})

const User = mongoose.model("User", UserSchema)
const Account = mongoose.model('Account', AccountSchema)

module.exports = { User, Account, SignInSchema, SignUpSchema, UpdateSchema }