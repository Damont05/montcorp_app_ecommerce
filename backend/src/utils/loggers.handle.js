import winston from 'winston'
import { config } from '../config/config.js';

 export const logger=winston.createLogger(
    {
        levels:{error:0,warning:1,info:2,debug:3},
        format: winston.format.simple(),
        transports:[
            new winston.transports.Console(
                {
                    level:'debug',
                    format: winston.format.combine(
                        winston.format.colorize({
                            colors:{
                                error: 'red',
                                warn: 'yellow',
                                info: 'cyan',
                                debug: 'green'
                            }
                        }),
                        winston.format.simple()
                    )
                }
            ),
        ]
    }
)


const transporteProd=new winston.transports.Console(
    {
        level:"debug",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
    }
)


const transporteFile=new winston.transports.File(
    {   
        level:"error",
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