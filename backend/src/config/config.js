import dotenv from 'dotenv';

dotenv.config({
    override:true,
    path: './src/.env'
});

export const config={
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT || 8080,
    DBNAME:process.env.DBNAME,
    MODE:process.env.MODE,
    JWT_SECRET:process.env.JWT_SECRET
}