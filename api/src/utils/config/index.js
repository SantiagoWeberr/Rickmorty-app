require('dotenv').config();


module.exports = {
    dbUser : process.env.DB_USER || "postgress",
    dbName : process.env.DB_NAME || "rickmorty",
    dbPort : process.env.DB_PORT || "5432",
    dbHost : process.env.DB_HOST || "localhost", 
    dbPassword : process.env.DB_PASSWORD || "1234",
    host : process.env.HOST || "localhost",
    port : process.env.PORT || 3001
}