const express = require("express")
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const userRoute = require('./routes/UserRoute')
const transactionRoute = require('./routes/TransactionRoute')

app.use('/user', userRoute)
// app.use('/transaction', transactionRoute )

app.listen(3000, ()=>{console.log("I am live.");
})