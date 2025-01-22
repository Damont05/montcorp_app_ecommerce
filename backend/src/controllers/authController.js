//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import bcryptjs from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import {findUserByEmail,createUser} from '../dao/UserDao.js';
import { logger } from '#utils/loggersHandle.js';
import { HandleHttp } from '#utils/httpHandle.js';
import { config } from '../config/config.js';


export const registerController = async (req, res) => {
    logger.info("[registerController] - INI");
    const { name, lastname, email, password } = req.body;
    logger.debug("[registerController] - email: " + email + 
                                    " - password: " + password + 
                                    " - name: " + name + 
                                    " - lastname: " + lastname);
    //Fields validate
    if (!name || !lastname || !email || !password) {
        return HandleHttp.error(res, "all fields are required", 400);
    }
    //Email format validate.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return HandleHttp.error(res, "Email invalid format", 400);
    }

    try {
        //Email exist validate.
        const user = await findUserByEmail(email);
        logger.debug("[registerController] - user: " +  JSON.stringify(user));
        if (user.length > 0) {
            return HandleHttp.error(res, "User already exist", 400);
        }
        // Hashear password
        const hashedPassword = await bcryptjs.hash(password, 10);
        //Create new user
        const newUser = await createUser(name, lastname, email, hashedPassword);
        //res.status(201).json({ message: 'User registered successfully' });
        return  HandleHttp.created(res, newUser, "User registered successfully" );

    } catch (error) {
        logger.error("[registerController] - Error: ", error);
        return HandleHttp.error(res, 'Internal server error', 500);
    }
};

export const loginController = async (req, res) => {
    logger.info("[loginController] - INI");
    const { email, password } = req.body;

    //Fields validate
    if (!email || !password) {
        return HandleHttp.error(res, "email and password are required", 400);
    }
    //Email format validate.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return HandleHttp.error(res, "Email invalid format", 400);
    }

    try {
        //Email exist validate.
        const users = await findUserByEmail(email);
        if (users.length === 0) { return HandleHttp.error(res, "User not found", 404);}

        //Ini users
        const user = users[0];

        // Verificar la contraseña (usa bcryptjs o tu método preferido)
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return HandleHttp.error(res, "Invalid password", 401);
        }
        const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' });
        return  HandleHttp.successToken(res, user, token, "Login successfully" );

    } catch (error) {
        logger.error("[registerController] - Error: ", error);
        return HandleHttp.error(res, 'Internal server error', 500);
    }
};
