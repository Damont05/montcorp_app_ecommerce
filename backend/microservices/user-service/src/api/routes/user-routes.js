
//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import { Router } from "express";
import {    createUserController,
            getUsersController, 
            getUserIdController, 
            updateUserController,
            deleteUserController } from '../controllers/userController.js';

const router = Router()

/** 
 * Created user
 * http://localhost:8080/api/alta/user [POST]
*/
router.post("/api/alta/user", createUserController);


/** 
 * Get user
 * http://localhost:8080/api/get/user [GET]
*/
router.get("/api/get/user", getUsersController);


/** 
 * Get user ID
 * http://localhost:8080/api/get/user/:id [GET]
*/
router.get("/api/get/user/:id", getUserIdController);


/** 
 * Update user
 * http://localhost:8080/api/update/user/:id [PUT]
*/
router.put("/api/update/user/:id", updateUserController);

/** 
 * Delete user
 * http://localhost:8080/api/del/user/:id [DELETE]
*/
router.delete("/api/del/user/:id", deleteUserController);

export { router };