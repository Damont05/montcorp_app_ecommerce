import { Schema, Types, model, Model} from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        user_name:{
            type: String,
            required: true,
            unique: true,
        },
        first_name:{
            type: String
        },
        last_name:{
            type: String
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        phone:{
            type: String,
            required: true,
        },
        address:{
            type:String
        },
        password:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;