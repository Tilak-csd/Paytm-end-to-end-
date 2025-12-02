const mongoose = require("mongoose")
import dotenv from 'dotenv';
dotenv.config()

const db_link = process.env.MONGOOSE_SERVER
mongoose.connect(db_link)

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: Number
})

const User = mongoose.model("User", UserSchema)

module.exports = { User }