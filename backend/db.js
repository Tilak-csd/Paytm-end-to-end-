const zod = require("zod")
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config()

const db_link = process.env.MONGOOSE_SERVER
mongoose.connect(db_link)

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: Number
})


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

const User = mongoose.model("User", UserSchema)

module.exports = { User, SignInSchema, SignUpSchema, UpdateSchema }