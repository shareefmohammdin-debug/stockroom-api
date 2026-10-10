import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,

    // this option to encryption connect 
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

import type { PoolConnection } from 'mysql2/promise';

pool.getConnection()
    .then((connection: PoolConnection) => {
        console.log("the data bace connect successfully!")
        connection.release();
    })
    .catch((err: Error) => {
        console.log("Database connection failed:", err.message);
    });


// module.exports = pool
export default pool