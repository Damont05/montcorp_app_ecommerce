//**************************************************************************/
//      |       Author      |       description         |    Date    |
//      |------------------ |---------------------------|------------|
//             Damont       |        Creation class     | 16-12-2024
//      |------------------ |---------------------------|------------|
//      |                   |                           |            |
//**************************************************************************/

import winston from 'winston'
import { config } from '../config/config.js';

let alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.label({
        label:'[server]'
    }),
    winston.format.timestamp({
        format:"YY-MM-DD HH:MM:SS"
    }),
    winston.format.printf(
        //info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
        info => ` ${info.label}  ${info.timestamp} : ${info.message}`
    )
);

export const logger = winston.createLogger({
    level: "debug",
    transports: [
        new (winston.transports.Console)({
            format: alignColorsAndTime
        })
    ],
});


const transporteProd=new winston.transports.Console(
    {
        level:"debug",
        format: winston.format.combine(
            winston.format.label({
                label:'[SERVER][LOGGER]'
            }),
            winston.format.timestamp({
                format:"DD-MM-YYYY HH:mm:ss"
            }),
            
            winston.format.printf(
                info => ` ${info.label}[${info.timestamp}][${info.level}] : ${info.message}`
            )
        )
    }
)


const transporteFile=new winston.transports.File(
    {   
        level:"debug",
        filename:"./src/logs/logsFile.log",
        format: winston.format.combine(
            winston.format.label({
                label:'[SERVER][LOGGER]'
            }),
            winston.format.timestamp({
                format:"DD-MM-YYYY HH:mm:ss"
            }),
            
            winston.format.printf(
                info => ` ${info.label}[${info.timestamp}][${info.level}] : ${info.message}`
            )
        )
    }
)

if(config.MODE==="PRODUCTION"){
    logger.add(transporteFile,transporteProd)
}

export const middLogg=(req, res, next)=>{
    req.logger=logger
    next()
}