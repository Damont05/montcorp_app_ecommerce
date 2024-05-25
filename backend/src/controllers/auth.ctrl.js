import { handleHttp } from "../utils/error.handle.js";
import { logger } from "../utils/loggers.handle.js";
import { s_registerNewUser } from "../services/auth.service.js";


const c_register = async (req, res) => {
    try {
        const body = req.body;
        const resRegister = await s_registerNewUser(body)
        res.setHeader('Content-Type','application/json');
        if(resRegister === 'FIELDS_REQUIRED') return  handleHttp(res, 'Fields required', 400);
        if(resRegister === 'EMAIL_INVALID') return  handleHttp(res, 'Email Invalid', 400);
        if(resRegister === 'ALREADY_USER_EMAIL') return  handleHttp(res, 'Email user already', 400);

        res.setHeader('Content-Type','application/json');
        res.status(201).json({ok:true, message:'User created successfully', user:resRegister});

    } catch (e) {
        res.setHeader('Content-Type','application/json');
        handleHttp(res, 'ERROR_SERVER_POST_REGISTER', 500);
        console.log(e);
     }
}

export { c_register}