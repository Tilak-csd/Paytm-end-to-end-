const { JWTverify, JWTtoken } = require('../utils/jwt')

function signInmiddlewares(req, res, next) {

    const user_header = req.headers['authorization']
    if (!user_header) {
        return res.status(500).json({ message: "No Header" })
    }

    const token = user_header.split(' ')[1]

    if (!token) {
        return res.status(500).json("Bad Input")
    }
    try {
        const verfied = JWTverify(token)
        if(!verfied){
            res.status(400).json({message : "Wrong Token"})
        }
        next()

    } catch (error) {
        res.status(404).json({ message: "error" })
    }
}