const express = require("express")
const router = express.Router()
const userRouter = require('./UserRoute')
const accountRouter = require('./AccountRoute')

router.use('/user', userRouter)
// router.use('/account', accountRouter)

module.exports = router