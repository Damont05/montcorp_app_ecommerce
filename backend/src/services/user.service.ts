import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";


const s_insertUser = async (user: User) => {
    const resCreateUser = await UserModel.create(user);
    return resCreateUser;
};

const s_getAllUsers = async () => {
    const resGetAllUsers = await UserModel.find();
    return resGetAllUsers;
};

const s_getUserName = async (user_name:User) => {
    const resGetUserName = await UserModel.findOne({user_name}).lean();
    return resGetUserName;
};

const s_getUserId = async (id:string) => {
    const resGetUserId = await UserModel.findById({_id:id}).lean();
    return resGetUserId;
};

const s_updateUser = async (id:string, data: User) => {
    const resUpdate = await UserModel.findOneAndUpdate({ _id:id }, data, {
        new:true,
    });
    return resUpdate;
};

const s_deleteUser = async (id:string) => {
    const resDelete = await UserModel.findOneAndDelete({ _id:id })
    return resDelete;
};



export {s_insertUser, s_getAllUsers, s_getUserName, s_getUserId, s_updateUser, s_deleteUser};