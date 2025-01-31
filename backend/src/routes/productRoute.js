//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          BACK-003: Crear modulo de productos                 24-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import { Router } from "express";
import {createProductController} from '../controllers/productController.js';

const router = Router()

/** 
 * Create product
 * /api/product/create [POST]
*/
router.post("/create", createProductController);

/** 
 * Get all products
 * /api/product [GET]
*/
//router.get("/", getProductsController);

/** 
 * Get products for ID.
 * /api/product/:id [GET]
*/
//router.get("/:id", getProductIdController);


export { router };