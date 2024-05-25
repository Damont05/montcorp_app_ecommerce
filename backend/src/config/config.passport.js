import { UserModel } from "../database/models/user.model.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { verfied } from "../utils/bcrypt.handle.js";

export const initPassport=()=>{
    passport.use("login", new LocalStrategy(
        {
            usernameField:"email",
            passwordField: "password",
        },
        async(username, password, done)=>{
            try {
                let user=await UserModel.findOne({email:username}).lean();
                if(!user) return done(null, false, {ok:false, message:"User Not Found"});

                const passHash = user.password;
                const isCorrect = await verfied(password,passHash);
                if(!isCorrect)  return done(null, false, {ok:false, message:"Incorrect password"});

                return done(null, user)

            } catch (e) {
                return done(e)
            }
        }
    ));
}