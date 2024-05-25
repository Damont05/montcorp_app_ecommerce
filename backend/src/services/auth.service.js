import { encrypt } from "../utils/bcrypt.handle.js";
import { UserModel } from "../database/models/user.model.js";

const s_registerNewUser = async (user) => {
    try {
        //Validate input body params.
        if (!user.name || !user.email || !user.password) {
            return 'FIELDS_REQUIRED';
        }
        let regMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        if (!regMail.test(user.email)) {
            return `EMAIL_INVALID`;
        }
        let email = user.email;

        const checkIs = await UserModel.findOne({ email })
        if (checkIs) return "ALREADY_USER_EMAIL";

        const passHash = await encrypt(user.password);
        const newUser = {
            name: user.name,
            last_name: user.last_name,
            phone: user.phone,
            address: user.address,
            email: user.email,
            password: passHash
        }
        const regesterUser = await UserModel.create(newUser);
        return regesterUser;
    } catch (e) {
        return e;
    }
}
export { s_registerNewUser };