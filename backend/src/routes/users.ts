import { Request, Response, Router } from "express";
import {  } from "module";
import { c_deleteUser, c_getUser, c_getUsers, c_postUser, c_updateUser } from "../controllers/user.controller";

const router = Router()

/** 
 * Create user
 * http://localhost:8080/users [POST]
*/
router.post("/", c_postUser);

/** 
 * Get all users
 * http://localhost:8080/users [GET]
*/
router.get("/", c_getUsers);

/** 
 * Get user for id
 * http://localhost:8080/users/:id [GET]
*/
router.get("/:id",c_getUser);

/** 
 * http://localhost:8080/users/:id [PUT]
*/
router.put("/:id", c_updateUser);

/** 
 * http://localhost:8080/users/:id [DELETE]
*/
router.delete("/:id", c_deleteUser);


export { router };