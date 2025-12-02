const { JWTverify, JWTtoken } = require('../utils/jwt')

function authMiddlewares(req, res, next) {

    const user_header = req.headers['authorization']
    if (!user_header || !user_header.startsWith('Bearer ')) {
        return res.status(500).json({ message: "No Header" })
    }

    const token = user_header.split(' ')[1]

    if (!token) {
        return res.status(500).json("Bad Input")
    }
    try {
        const verfied = JWTverify(token)
        if (!verfied) {
            res.status(400).json({ message: "Wrong Token" })
        }
        req.id = verfied.id
        next()

    } catch (error) {
        res.status(404).json({ message: error })
    }
}

module.exports = {authMiddlewares}