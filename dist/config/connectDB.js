"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
dotenv_1.default.config();
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // this option to encryption connect 
    // ssl: {
    //     rejectUnauthorized: false
    // }
});
pool.getConnection()
    .then((connection) => {
    console.log("the data bace connect successfully!");
    connection.release();
})
    .catch((err) => {
    console.log("Database connection failed:", err.message);
});
// module.exports = pool
exports.default = pool;
//# sourceMappingURL=connectDB.js.map