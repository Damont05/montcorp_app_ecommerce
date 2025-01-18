//****************************************************************************************************/
//      |       Author      |                     description                   |    Date         |
//      |-----------------------------------------------------------------------------------------|
//             Damont          REQ-BACK-0230: Create api get user id                17-01-2025
//      |-----------------------------------------------------------------------------------------|
//****************************************************************************************************/

/*import {//getUsersService, 
        getUserIdService, 
        //updateUserService, 
        //deleteUserService,
        createUserService
        } from '#services/userService.js';*/

import { findUserById } from '#dao/UserDao.js'; 
import { logger } from '#utils/loggersHandle.js';
import { HandleHttp } from '#utils/httpHandle.js';


/**
 * @description Create user
 * @route POST /users/api/new
 */
export const createUserController = async (req, res) => {
    logger.debug("[createUserController] - INI");
    const { fullname, email, phone, address, password } = req.body;

    if (!fullname ||  !email || !phone || !address || !password) {
        return HandleHttp.error(res, "All fields are required", 400);
    }

    const getUserEmail = await getUserIdService(email);
    logger.debug("[createUserController] - getUserEmail: " + getUserEmail);
    if (getUserEmail != 0 ) { 
        return HandleHttp.error(res, getUserEmail, 400);
    }
    
    try {
        logger.debug("[createUserController] - call service");
        const newUser = await createUserService({ fullname, email, phone, address, password });
        return  HandleHttp.created(res, newUser, "User has been created" );

    } catch (error) {
        HandleHttp.error(res, error, 500);
    }
};

/**
 * @description Get all users
 * @route GET /users/api/all
 */
export const getUsersController = async (req,res) => {

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

/**
 * @description Get user by ID
 * @route GET /api/user/get/:id
 */
export const getUserIdController = async(req,res) => {
    logger.debug("[getUserIdController] - INI");
    try {
        const userId = req.params.id_user;
        logger.debug('[getUserIdController] - userId: ', userId);
        const user = await findUserById(userId);
        return  HandleHttp.success(res, user, "user" );
    } catch (error) {
        HandleHttp.error(res, error, 500);
    }
}

/**
 * @description Update user by ID
 * @route PUT /users/api/:id
 */
export const updateUserController = async (req, res) => {

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

/**
 * @description Delete user by ID
 * @route DELETE /users/api/:id
 */
export const deleteUserController = async (req, res) => {

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
