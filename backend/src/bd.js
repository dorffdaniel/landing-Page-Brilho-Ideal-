import dotenv from 'dotenv'
dotenv.config();

import mysql from 'mysql2';


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'brilhoideal'
})

export default conn;