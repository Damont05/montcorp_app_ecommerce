import { Router } from "express";
import { router as user_route } from './user.router.js';
import { router as auth_route } from './auth.router.js';


const router = Router();

router.use("/users", user_route);
router.use("/auth", auth_route);


export { router };
