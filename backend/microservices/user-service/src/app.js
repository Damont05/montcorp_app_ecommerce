//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation Server    | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/
import express from 'express';
//import swaggerJsdoc from 'swagger-jsdoc'
//import swaggerUi from 'swagger-ui-express'
import cors from 'cors';
//import passport from 'passport';
//import cookieParser from 'cookie-parser';
//import db from './database/conn.js';
import {pool}  from './database/conn.js';
import { router } from './api/routes/user-routes.js';
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

