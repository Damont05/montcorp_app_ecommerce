import passport from "passport";
import { generateToken } from "../utils/jwt.handle.js"

export const loginMiddleware = (estrategia) => function (req, res, next) {
    passport.authenticate(estrategia, function (err, user, info) {
        try {
            if (err || !user) {
                return res.status(404).json({ ok: false, error: info.message ? info.message : info.toString() })
            } else {
                req.login(user, { session: false }, async (err) => {
                    if (err) return next(err);
                    const token = generateToken(user.email);
                    const userLogin = {
                        user,
                        token
                    };
                    res.cookie("token", token, {
                        httpOnly: true,
                    });
                    return res.json({ ok: true, userLogin })
                });
            }
        } catch (e) {
            return res.status(500).json({ ok: false, message: "Internal Server Error" })
        }
       
    })(req, res, next);
}