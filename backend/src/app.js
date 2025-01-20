//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          Creation Server                                    16-12-2024
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id                 17-01-2025
//      |-----------------------------------------------------------------------------------------|
//              Damont          BACK-001: Linea en blanco                         17-01-2025
//****************************************************************************************************/
import express from 'express';
//import swaggerJsdoc from 'swagger-jsdoc'
//import swaggerUi from 'swagger-ui-express'
import cors from 'cors';
//import passport from 'passport';
//import cookieParser from 'cookie-parser';
import {pool}  from './database/conn.js';
import { router } from './routes/indexRoute.js'; //REQ-BACK-0230 Damont
import { config } from './config/config.js';
import { logger } from './utils/loggersHandle.js';
//import { initPassport } from './config/config.passport.js';
const PORT = config.PORT;
const app = express();
app.use(cors());
//app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


//comentario  //BACK-001:

//Passport config
//initPassport();
//app.use(passport.initialize());

// const options={
//     definition:{
//         openapi:"3.0.0",
//         info:{
//             title: "API",
//             version: "1.0.0",
//             description: "API DOCUMENTATIONS"
//         }
//     },
//     apis: ["./src/docs/*.yml"]D
// }
// const specs=swaggerJsdoc(options)
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.listen (PORT, () => logger.info(`Server on port ${PORT}`));

