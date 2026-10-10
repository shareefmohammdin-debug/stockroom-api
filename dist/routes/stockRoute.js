"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = __importDefault(require("../config/connectDB"));
const router = express_1.default.Router();
// get all products 
router.get('/', async (req, res) => {
    try {
        const data = await connectDB_1.default.query("SELECT * FROM products");
        res.json(data);
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
// get by id 
router.get('/:id', async (req, res) => {
    try {
        const proId = req.params.id;
        const data = await connectDB_1.default.query("SELECT * FROM products WHERE id = ?", [proId]);
        res.json(data);
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
// post ro add a new products 
router.post('/', async (req, res) => {
    try {
        const { name, sku, quantity, price, product_status } = req.body;
        const data = await connectDB_1.default.query("INSERT INTO products (name,sku,quantity,price,product_status) VALUES (?,?,?,?,?)", [name, sku, quantity, price, product_status]);
        res.json({
            message: "the data inserted successfully ",
            data: data
        });
    }
    catch (err) {
        const error = err;
        res.status(401).json({ message: error.message });
    }
});
// put : edit poduct 
router.put('/:id', async (req, res) => {
    try {
        const { name, sku, quantity, price, product_status } = req.body;
        const edit = await connectDB_1.default.query("UPDATE products SET name = ?, sku = ?, quantity = ?, price = ?, product_status = ? WHERE id = 33", [name, sku, quantity, price, product_status]);
        res.json({
            message: "post edit done successfully",
            data: edit
        });
    }
    catch (err) {
        const error = err;
        res.status(401).json({ message: error.message });
    }
});
// delete product
router.delete('/:id', async (req, res) => {
    try {
        const delId = req.params.id;
        const del = connectDB_1.default.query("delete from products where id = ?", [delId]);
        res.json({
            message: "the product deleted successfully",
            id: `where id ${delId}`,
            data: del
        });
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=stockRoute.js.map