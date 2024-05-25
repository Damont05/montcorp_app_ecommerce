import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const JWT_SECRET = config.JWT_SECRET;

const generateToken = (id) => {
    const token = jwt.sign({ id }, `${JWT_SECRET}`,{
        expiresIn: "1800s"//30min
    });
    return token;
}

const verifyToken = async () => {}

export {
    generateToken,
    verifyToken
}