//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id                17-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

// Middleware para verificar el token
export const verificarToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    console.log('authorizationHeader: ', authorizationHeader);
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Token not found.' });
    }
    const token = authorizationHeader.replace('Bearer ', '');
    console.log('token: ', token);
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid Token.', err });
        }
        req.user = decoded;
        next();
    });
};