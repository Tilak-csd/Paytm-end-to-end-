const express = require("express")
const cors = require('cors')
const rootRoute = require('./routes/index')
const path = require("path")
const multer = require("multer")
const app = express()

app.use(express.json())
app.use(cors())
// multer static so that even the front end can access the folder 'uploads'
app.use('/uploads',  express.static(path.join(__dirname, "uploads")))


app.use('/api/v1', rootRoute)

app.listen(3000, ()=>{console.log("I am live.");
})