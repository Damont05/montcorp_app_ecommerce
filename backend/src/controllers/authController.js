//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import bcryptjs from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import {findUserByEmail,createUser} from '../dao/UserDao.js';
import { logger } from '#utils/loggersHandle.js';
import { HandleHttp } from '#utils/httpHandle.js';

export const registerController = async (req, res) => {
    logger.info("[registerController] - INI");
    const { email, password } = req.body;
    logger.debug("[registerController] - email: " + email + " - password: " + password);

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
        const user = await findUserByEmail(email);
        logger.debug("[registerController] - user: " +  JSON.stringify(user));
        if (user.length > 0) {
            return HandleHttp.error(res, "User already exist", 400);
        }
        // Hashear password
        const hashedPassword = await bcryptjs.hash(password, 10);
        //Create new user
        const newUser = await createUser(email, hashedPassword);
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
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return  HandleHttp.success(res, token, "Login successfully" );

    } catch (error) {
        logger.error("[registerController] - Error: ", error);
        return HandleHttp.error(res, 'Internal server error', 500);
    }
};
