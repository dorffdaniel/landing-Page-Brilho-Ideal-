import dotenv from 'dotenv'
dotenv.config();

const mysql = require('mysql2');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: ''
})