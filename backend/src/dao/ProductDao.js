//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          BACK-003: Crear modulo de productos                 24-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import { pool }  from '../database/conn.js';
import { logger } from '#utils/loggersHandle.js'; 


export const createProduct = async (name, description, price, costPrice) => {
    logger.info("[createProduct DAO] - INI");
    const query = 'INSERT INTO products (name, description, price, costPrice) VALUES (?, ?, ? ,?)';
    try {

        const product = await pool.query(query, [name, description, price, costPrice]);
        logger.debug("product: " + product);

        // Verifica si se realizó la inserción correctamente
        if (product[0].affectedRows === 1) {
            const insertedProductId = product[0].insertId;

            // Realiza una consulta para obtener el usuario creado
            const [newProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [insertedProductId]);
            
            logger.debug('Producto creado:', newProduct);
            return newProduct; // Devuelve el producto creado
        }
        
    } catch (err) {
        logger.error('Error creating product:', err);
        throw err; 
    }

}
