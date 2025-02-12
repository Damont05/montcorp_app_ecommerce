//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//              Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//      |       Damont        BACK-004: Modificar respuestas de servicios Auth     12-02-2025     |
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import bcryptjs from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import {findUserByEmail,createUser} from '../dao/UserDao.js';
import { logger } from '#utils/loggersHandle.js';
import { HandleHttp } from '#utils/httpHandle.js';
import { config } from '../config/config.js';
import { Constants } from '../utils/constants.js' //BACK-004 - Damont


export const registerController = async (req, res) => {
    logger.info("[registerController] - INI");
    const { name, lastname, email, password } = req.body;
    logger.debug("[registerController] - email: " + email + 
                                    " - password: " + password + 
                                    " - name: " + name + 
                                    " - lastname: " + lastname);
    //Fields validate
    if (!name || !lastname || !email || !password) {
        return HandleHttp.error(res, Constants.MISSING_FIELDS, 400); //BACK-004 - Damont
    }
    //Email format validate.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return HandleHttp.error(res, Constants.EMAIL_FORMAT, 400); //BACK-004 - Damont
    }

    try {
        //Email exist validate.
        const user = await findUserByEmail(email);
        logger.debug("[registerController] - user: " +  JSON.stringify(user));
        if (user.length > 0) {
            return HandleHttp.error(res, Constants.USER_EXIST, 400); //BACK-004 - Damont
        }
        // Hashear password
        const hashedPassword = await bcryptjs.hash(password, 10);
        //Create new user
        const newUser = await createUser(name, lastname, email, hashedPassword);
        return  HandleHttp.created(res, newUser, Constants.USER_REGISTER_SUCCESS );//BACK-004 - Damont

    } catch (error) {
        logger.error("[registerController] - Error: ", error);
        return HandleHttp.error(res, Constants.INTERNAL_SERVER_ERROR, 500); //BACK-004 - Damont
    }
};

export const loginController = async (req, res) => {
    logger.info("[loginController] - INI");
    const { email, password } = req.body;

    //Fields validate
    if (!email || !password) {
        return HandleHttp.error(res, Constants.MISSING_FIELDS, 400); //BACK-004 - Damont
    }
    //Email format validate.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return HandleHttp.error(res, Constants.EMAIL_FORMAT, 400); //BACK-004 - Damont
    }

    try {
        logger.info("[loginController] - email: " + email);
        //Email exist validate.
        const users = await findUserByEmail(email);
        if (users.length === 0) { return HandleHttp.error(res, Constants.USER_NOT_FOUND, 404);} //BACK-004 - Damont 

        //Ini users
        const user = users[0];

        logger.info("[loginController] - user: " + user.id_user);

        // Verificar la contraseña (usa bcryptjs o tu método preferido)
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return HandleHttp.error(res, Constants.PASSWORD_INVALID, 401); //BACK-004 - Damont 
        }
        const token = jwt.sign({ id: user.id_user }, config.JWT_SECRET, { expiresIn: '1h' });
        return  HandleHttp.successToken(res, token, Constants.USER_LOGIN_SUCCESS ); //BACK-004 - Damont 

    } catch (error) {
        logger.error("[loginController] - Error: ", error);
        return HandleHttp.error(res, Constants.INTERNAL_SERVER_ERROR, 500); //BACK-004 - Damont 
    }
};
