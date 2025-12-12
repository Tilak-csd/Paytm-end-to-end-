const zod = require("zod")
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config()

const db_link = process.env.MONGOOSE_SERVER
// PC
// mongoose.connect('mongodb+srv://tilak:1234567890@cluster0.mlaafeg.mongodb.net/Paytm')
// Laptop
mongoose.connect('mongodb+srv://admin:admin@cluster0.mlaafeg.mongodb.net/Paytm')

const SignInSchema = zod.object({
    email: zod.email(),
    password: zod.string().min(8)
})

const SignUpSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    email: zod.email(),
    password: zod.string().min(8),
})

const NameSchema = zod.object({
    firstname : zod.string(),
    lastname : zod.string(),
})

const PasswordSchema = zod.object({
        password : zod.string().min(8)
})

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    avatar : String
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

module.exports = { User, Account, SignInSchema, SignUpSchema, NameSchema, PasswordSchema }