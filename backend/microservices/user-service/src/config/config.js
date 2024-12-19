import dotenv from 'dotenv';

dotenv.config({
    override:true,
    path: './src/.env'
});

export const config={
    //MONGO_URL:process.env.MONGO_URL,
    //DBNAME:process.env.DBNAME,
    MODE:process.env.MODE,
    JWT_SECRET:process.env.JWT_SECRET,
    PORT:process.env.PORT || 8080,
    HOST:process.env.MYSQL_HOST,
    DBNAME: process.env.MYSQL_DATABASE,
    USERDB: process.env.MYSQL_USER,
    PASSDB: process.env.MYSQL_PASSWORD,
}