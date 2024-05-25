import { Router } from "express";
import {c_register} from "../controllers/auth.ctrl.js";
import { loginMiddleware } from "../middleware/login.middleware.js";

const router = Router()

/** 
 * http://localhost:8080/auth/login [POST]
*/
router.post("/login", loginMiddleware('login'));

/** 
 * http://localhost:8080/auth/register [POST]
*/
router.post("/register", c_register);
    
export { router };