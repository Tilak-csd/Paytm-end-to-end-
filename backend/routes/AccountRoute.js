const express = require('express')
const Route = express.Router()
const {authMiddlewares} = require('../middlewares/middlewares')
const {Account} = require('../db')

Route.get('/balance', authMiddlewares, async (req, res)=>{
    try{
        const UserId = req.id
        const accountData = await Account.findOne({userId : UserId})
        res.json({
            message : "Your balance is",
            balance  : accountData.balance
        })
    }catch(err){
        console.log("Error whle fetching data", err)
        res.status(500).json({
            message : "Error while fetching the data from database"
        })
    }
})




module.exports = Route