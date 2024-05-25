import { Router } from "express";
import { 
    c_deleteUser, 
    c_getUser, 
    c_getUsers, 
    c_updateUser } from "../controllers/user.ctrl.js";

const router = Router()

/** 
 * Get all users
 * http://localhost:8080/users [GET]
*/
router.get("/", c_getUsers);

/** 
 * Get user for id
 * http://localhost:8080/users/:id [GET]
*/
router.get("/:id", c_getUser);

/** 
 * Update user for id
 * http://localhost:8080/users/:id [PUT]
*/
router.put("/:id", c_updateUser);

/** 
 * Delete user for id
 * http://localhost:8080/users/:id [DELETE]
*/
router.delete("/:id", c_deleteUser);


export { router };