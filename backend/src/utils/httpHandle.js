//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import { logger } from '#utils/loggersHandle.js';


export class HandleHttp {
    static response(res, message, statusCode) {
        // Establecer el código de estado
        res.status(statusCode);

        // Crear la respuesta estructurada
        const response = {
            status: statusCode,
            message: message,
            timestamp: new Date().toISOString(),
        };

        // Enviar la respuesta como JSON
        return res.json(response);
    }

    static success(res, data, message, statusCode = 200) {
        const response = {
            status: statusCode,
            message: message,
            data: data,
            timestamp: new Date().toISOString(),
        };
        return res.status(statusCode).json(response);
    }

    static created(res, data, message, statusCode = 201) {
        const response = {
            status: statusCode,
            message: message,
            data: data,
            timestamp: new Date().toISOString(),
        };
        return res.status(statusCode).json(response);
    }

    static error(res, errorMessage, statusCode) {
        // Log del error (puedes usar un logger como winston o similar)
        logger.error(`${errorMessage}`);

        // Llamar a la función de respuesta
        return this.response(res, errorMessage, statusCode);
    }
};