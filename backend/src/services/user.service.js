import { UserModel } from "../database/models/user.model.js";


const s_getAllUsers = async () => {
    const resGetAllUsers = await UserModel.find();
    return resGetAllUsers;
};

const s_getUserName = async (user_name) => {
    const resGetUserName = await UserModel.findOne({user_name}).lean();
    return resGetUserName;
};

const s_getUserId = async (id) => {
    const resGetUserId = await UserModel.findById({_id:id}).lean();
    return resGetUserId;
};

const s_updateUser = async (id,data) => {
    const resUpdate = await UserModel.findOneAndUpdate({ _id:id }, data, {
        new:true,
    });
    return resUpdate;
};

const s_deleteUser = async (id) => {
    const resDelete = await UserModel.findOneAndDelete({ _id:id })
    return resDelete;
};



export {s_getAllUsers, s_getUserName, s_getUserId, s_updateUser, s_deleteUser};