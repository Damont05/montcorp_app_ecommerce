//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id               17-01-2025
//      |-----------------------------------------------------------------------------------------|
//             Damont          BACK-003: Crear modulo de productos                 24-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

import { Router } from "express";
import { router as userRoute } from '../routes/userRoute.js'; //REQ-BACK-0230
import { router as productRoute } from '../routes/productRoute.js'; //BACK-003
import { router as authRoute } from '../routes/authRoute.js';
const router = Router();

router.use("/api/auth", authRoute);
router.use("/api/user", userRoute); //REQ-BACK-0230
router.use("/api/product" , productRoute); //BACK-003


export { router };
