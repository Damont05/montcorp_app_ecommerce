import { hash, compare } from "bcrypt";

const encrypt = async (pass) => {
    const passHash = await hash(pass,8);
    return passHash;
};

const verfied = async (pass, passHash) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
};

export { encrypt, verfied };