//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import mysql from 'mysql2/promise';
import dotenv from "dotenv";
import { logger } from '#utils/loggersHandle.js';

dotenv.config();


export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    waitForConnections: true,
  });
  
// Función para verificar la conexión a la base de datos
const testConnection = async () => {
    try {
        // Obtén una conexión del pool
        const connection = await pool.getConnection();
        logger.info("Database connected successfully."); // Mensaje de conexión exitosa
        connection.release(); // Libera la conexión después de usarla
    } catch (error) {
        logger.error("Database connection failed:", error); // Mensaje de error en caso de fallo
    }
};

// Llama a la función para probar la conexión
testConnection();



