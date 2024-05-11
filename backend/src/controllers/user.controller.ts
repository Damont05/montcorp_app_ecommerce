import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import mongoose from 'mongoose';
import { s_insertUser, s_getAllUsers, 
    s_getUserName, s_getUserId, 
    s_updateUser, s_deleteUser} from "../services/user.service";


const c_postUser = async ({body}:Request, res:Response) => {
    try {
        //Validate input body params.
        if(!body.user_name || !body.email || !body.phone || !body.password){
            res.setHeader('Content-Type','application/json');
            handleHttp(res, 'FIELDS_REQUIRED', 400);
           return;
        } 
        
        //Validate existence user_name.
        let userName = body.user_name;
        const userExist = await s_getUserName(userName);
        if(userExist != null){
            res.setHeader('Content-Type','application/json');
            handleHttp(res, `USER_NAME_ALREADY_EXIST`, 400);
            return;
        }

        //Create user.
        const responseUser = await s_insertUser(body);
        res.setHeader('Content-Type','application/json');
        res.status(201).json({ok:true, message:'User created', user:responseUser})

    } catch (e) {
       res.setHeader('Content-Type','application/json');
       handleHttp(res, 'POST_USER', 500);
       console.log(e);
    }
}

const c_getUser = async ({params}:Request, res:Response) => {

    try {
        const {id} = params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({ ok:false, error: `Enter a valid ID`}); 
        }
        const user = await s_getUserId(id);
        if(!user){
            res.setHeader('Content-Type', 'application/json');
            handleHttp(res, 'USER_NOT_FOUND', 404);
            return
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ok:true, users:user})
    } catch (e) {
       handleHttp(res, 'Unexpected server error:CGETUSERS()', 500);
    }

}

const c_getUsers = async(req:Request, res:Response) => {

    try {
        const allUsers = await s_getAllUsers();    
        if(!allUsers){
            res.setHeader('Content-Type', 'application/json');
            handleHttp(res, 'Unexpected server error:CGETUSERS()', 500);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ok:true, users:allUsers});
    } catch (e) {
       handleHttp(res, 'Unexpected server error:CGETUSERS()', 500);
    }
}

const c_updateUser = async ({params, body}:Request, res:Response) => {

    try {
        const { id } = params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({ ok:false, error: `Enter a valid ID`}); 
        }

        const putUser = await s_updateUser(id, body);
        if(!putUser){
            res.setHeader('Content-Type', 'application/json');
            handleHttp(res, 'USER_NOT_FOUND', 404);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ok:true, message:'User update', user:putUser});
        
    } catch (e) {
       handleHttp(res, 'UPDATE_USER', 500);
    }

}

const c_deleteUser = async ({params}:Request, res:Response) => {

    try {
        const { id } = params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({ ok:false, error: `Enter a valid ID`}); 
        }
        const delUser = await s_deleteUser(id);
        if(!delUser){
            res.setHeader('Content-Type', 'application/json');
            handleHttp(res, 'USER_NOT_FOUND', 404);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ok:true, message:'User deleted successfully'});
        
    } catch (e) {
       handleHttp(res, 'DELETE_USER', 500);
    }

}

export { c_postUser, c_getUser, c_getUsers, c_updateUser, c_deleteUser}