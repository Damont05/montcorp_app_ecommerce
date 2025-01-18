//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import { Router } from "express";
import { loginController, registerController } from '../controllers/authController.js';

const router = Router()

/** 
 * Register user
 * /api/auth/register [POST]
*/
router.post("/register", registerController);

/** 
 * Login user
 * /api/auth/login [POST]
*/
router.post("/login", loginController);


export { router };