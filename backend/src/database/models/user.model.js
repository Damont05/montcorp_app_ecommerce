import mongoose from "mongoose";

export const UserModel = mongoose.model(
    "users",
    new  mongoose.Schema(
        {
            name:{
                type: String,
                required: true,
                unique: true,
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
                type: String
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
    )
)