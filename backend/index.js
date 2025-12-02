const express = require("express")
const app = express()
const userRoute = require('./routes/UserRoute')
app.use(express.json())


app.use('/user', userRoute)

app.listen(3000, ()=>{console.log("I am live.");
})