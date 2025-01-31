//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id                 17-01-2025
//****************************************************************************************************/
import { pool }  from '../database/conn.js';
import { logger } from '#utils/loggersHandle.js'; 

// create new user
export const createUser = async (name, lastname, email, password) => {
    logger.info("[createUser DAO] - INI");
    const query = 'INSERT INTO user (name, lastname, email, password) VALUES (?, ?, ? ,?)';
    try {
        const user = await pool.query(query, [name, lastname, email, password]);
        console.log("user: " + user);

        // Verifica si se realizó la inserción correctamente
        if (user[0].affectedRows === 1) {
            const insertedUserId = user[0].insertId;

            // Realiza una consulta para obtener el usuario creado
            const [newUser] = await pool.query('SELECT * FROM user WHERE id_user = ?', [insertedUserId]);
            
            console.log('Usuario creado:', newUser);
            return newUser; // Devuelve el usuario creado
        }
        
    } catch (err) {
        logger.error('Error creating user:', err);
        throw err; 
    }
};

//Find email exist
export const findUserByEmail = async (email) => {
    logger.info("[findUserByEmail DAO] - INI");
    const query = 'SELECT * FROM user WHERE email = ?';
    try {
        const [results] = await pool.query(query, [email]);
        logger.info("[findUserByEmail DAO] - results: " + results);
        return results;
    } catch (err) {
        logger.error('Error finding user by email:', err); 
        throw err; 
    }
};

//START REQ-BACK-0230
//Find user Id.
export const findUserById = async (id_user) => {
    logger.info("[findUserById DAO] - INI");
    const query = 'SELECT * FROM user WHERE id_user = ?';
    try {
        console.log('findUserById: ', id_user )
        const [results] = await pool.query(query, [id_user]);
        return results;
    } catch (err) {
        logger.error('Error finding user by id:', err); 
        throw err; 
    }
};
//END REQ-BACK-0230
