import { handleHttp } from "../utils/error.handle.js"
import mongoose from 'mongoose';
import {s_getAllUsers, 
        s_getUserId, 
        s_updateUser, 
        s_deleteUser} from "../services/user.service.js";

 
const c_getUser = async (req,res) => {

    try {
        const {id} = req.params;

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

const c_getUsers = async(req,res) => {

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

const c_updateUser = async (req, res) => {

    try {
        const { id } = req.params;
        const { body } = req.body;
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

const c_deleteUser = async (req, res) => {

    try {
        const { id } = req.params;

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

export { c_getUser, c_getUsers, c_updateUser, c_deleteUser }