
//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import { Router } from "express";
import { loginController, registerController } from '../controllers/authController.js';

const router = Router()

/** 
 * Register user
 * http://localhost:8080/api/auth/register [POST]
*/
router.post("/api/auth/register", registerController);

/** 
 * Login user
 * http://localhost:8080/api/auth/login [POST]
*/
router.post("/api/auth/login", loginController);


export { router };