const express = require('express')
const Route = express.Router()
const mongoose = require('mongoose')
const { authMiddlewares } = require('../middlewares/middlewares')
const { Account } = require('../db')

Route.get('/balance', authMiddlewares, async (req, res) => {
    try {
        const UserId = req.id
        const accountData = await Account.findOne({ userId: UserId })
        res.json({
            message: "Your balance is",
            balance: accountData.balance
        })
    } catch (err) {
        console.log("Error whle fetching data", err)
        res.status(500).json({
            message: "Error while fetching the data from database"
        })
    }
})

Route.post('/transfer', authMiddlewares, async (req, res) => {
    try {
        const session = await mongoose.startSession()
        session.startTransaction()

        const { toAccount, amount } = req.body
        const Id = req.id
        const SendAccount = await Account.findOne({ userId: Id }).session(session)

        if (!SendAccount || SendAccount.balance < amount) {
            session.abortTransaction()
            return res.status(400).json({ message: "Insufficiant balance " })
        }

        const RecieveAccount = await Account.findOne({ userId: toAccount }).session(session)

        if (!RecieveAccount) {
            session.abortTransaction()
            return res.status(400).json({ message: "Account Not Found" })
        }

        // performe transfer
        await Account.updateOne({ userId: Id }, { $inc: {balance : -amount }}).session(session)
        await Account.updateOne({ userId: toAccount }, { $inc: {balance : amount } }).session(session)

        await session.commitTransaction()
        res.status(200).json({
            message : `Rs. ${amount} is Transfer to ${RecieveAccount.userId}`
        })

    }catch (err) {
    console.log("error in performing transaction", err)
    return res.json("error in performing transaction")
}
})



module.exports = Route