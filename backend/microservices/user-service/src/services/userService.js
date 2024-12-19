//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

//import { UserModel } from "../../database/models/user.model.js";
import { logger } from '#utils/loggersHandle.js';
import bcrypt from 'bcrypt';
import { pool } from '../database/conn.js';

const INSERT_USER = "INSERT INTO user (fullname,email,phone,address,password) VALUES (?,?,?,?,?)";
const GET_USER_EMAIL = "SELECT * FROM user WHERE email = ?";

export const createUserService = async ({ fullname, email, phone,address, password }) => {
    logger.debug("[createUserService] - INI");
   

    // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    logger.debug("[createUserService] - : " + fullname+email+phone+address+ " " + hashedPassword);

    try {
        const [result] = await pool.execute(INSERT_USER, [fullname, email, phone, address, hashedPassword]);
        
        // Devuelve el nuevo usuario creado (puedes ajustar esto según tus necesidades)
        return {
            id: result.insertId,
            fullname,
            email,
            phone,
            address,
        };
    } catch (err) {
        logger.error("Database error:", err);
        throw new Error(err);
    }
};

export const getUserIdService = async (email) => {
    logger.debug("[getUserIdService] - INI");
    try {
        // email validate.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            logger.error("[getUserIdService] - Invalid email format");
            return 'Invalid email format';
        }
        
        // user exist validate.
        const userExist = await pool.query(GET_USER_EMAIL, [email]);
        logger.warn("[getUserIdService] - userExist: " + userExist.);
        if (userExist.length > 0) {
            logger.error("[createUserService] - User exist");
            //throw new Error('User already!');
            return 'User already!';
        }

        return 0;

    } catch (err) {
        logger.error("Database error:", err);
        throw new Error(err);
    }
};


