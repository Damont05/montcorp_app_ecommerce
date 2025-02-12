//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          BACK-003: Crear modulo de productos                 24-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/
import { logger } from '#utils/loggersHandle.js';
import { HandleHttp } from '#utils/httpHandle.js';
import {createProduct} from '../dao/ProductDao.js';

export const createProductController = async( req, res) => {
    logger.info("[createProductController] - INI");

    try {
        const { name, description,  price, costPrice } = req.body;
        //Fields validate
        if (!name || !description || !price || !costPrice) {
            return HandleHttp.error(res, "all fields are required", 400);
        }
        //Validate price and costPrice
        if (price <= 0 || costPrice <= 0) {
            return HandleHttp.error(res, "price and costPrice must be greater than 0", 400);
        }
        //Validate price and costPrice
        if (price < costPrice) {
            return HandleHttp.error(res, "price must be greater than costPrice",  400);
        }
        //Create product
        const newProduct = await createProduct(name, description, price, costPrice);
        return  HandleHttp.createdProduct(res, newProduct, "Product created successfully" );

    } catch (error) {
        logger.error("[createProductController] - Error: ", error);
        return HandleHttp.error(res, 'Internal server error', 500);
    }

}