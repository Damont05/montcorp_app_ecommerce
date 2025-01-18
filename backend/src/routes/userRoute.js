
//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id                 17-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import { Router } from "express";
import { verificarToken } from '#middleware/tokenVerifyMiddleware.js';
import { getUserIdController } from '#controllers/userController.js';


const router = Router()

/** 
 * Created user
 * /api/user/post [POST]
*/
//router.post("/post", createUserController);


/** 
 * Get user
 * /api/get/user [GET]
*/
//router.get("/api/get/user", getUsersController);


/** 
 * Get user ID
 * /api/user/get/:id [GET]
*/
router.get("/get/:id_user", verificarToken, getUserIdController);


/** 
 * Update user
 * http://localhost:8080/api/update/user/:id [PUT]
*/
//router.put("/api/update/user/:id", updateUserController);

/** 
 * Delete user
 * http://localhost:8080/api/del/user/:id [DELETE]
*/
//router.delete("/api/del/user/:id", deleteUserController);

export { router };