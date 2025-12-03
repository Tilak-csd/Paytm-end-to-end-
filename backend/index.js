const express = require("express")
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const rootRoute = require('./routes/index')

app.use('/api/v1', rootRoute)

app.listen(3000, ()=>{console.log("I am live.");
})