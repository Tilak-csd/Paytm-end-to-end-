import dotenv from 'dotenv';
const jwt = require('jsonwebtoken')
dotenv.config()

const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

