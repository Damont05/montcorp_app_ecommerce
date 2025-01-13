//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/
import { pool }  from '../database/conn.js';
import { logger } from '#utils/loggersHandle.js'; 

// create new user
export const createUser = async (email, password) => {
    logger.info("[createUser DAO] - INI");
    const query = 'INSERT INTO user (email, password) VALUES (?, ?)';
    try {
        const [results] = await pool.query(query, [email, password]);
        console.log("results: " + JSON.stringify(results));
        return results;
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
        return results;
    } catch (err) {
        logger.error('Error finding user by email:', err); 
        throw err; 
    }
};
