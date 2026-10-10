import express from 'express';
import pool from '../config/connectDB';

const router = express.Router()


// get all products 
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const data = await pool.query("SELECT * FROM products")
        res.json(data)
    } catch (err) {
        const error = err as Error
        res.status(400).json({ message: error.message })
    }
});


// get by id 
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const proId = req.params.id
        const data = await pool.query("SELECT * FROM products WHERE id = ?", [proId])
        res.json(data)

    } catch (err) {
        const error = err as Error
        res.status(400).json({ message: error.message })
    }
});


// post ro add a new products 
router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const { name, sku, quantity, price, product_status } = req.body
        const data = await pool.query(
            "INSERT INTO products (name,sku,quantity,price,product_status) VALUES (?,?,?,?,?)",
            [name, sku, quantity, price, product_status]
        )
        res.json({
            message: "the data inserted successfully ",
            data: data
        })

    } catch (err) {
        const error = err as Error
        res.status(401).json({ message: error.message })
    }
});


// put : edit poduct 
router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const { name, sku, quantity, price, product_status } = req.body

        const edit = await pool.query("UPDATE products SET name = ?, sku = ?, quantity = ?, price = ?, product_status = ? WHERE id = 33",
            [name, sku, quantity, price, product_status]
        )

        res.json({
            message: "post edit done successfully",
            data: edit
        })

    } catch (err) {
        const error = err as Error
        res.status(401).json({ message: error.message })
    }
})


// delete product
router.delete('/:id', async (req:express.Request, res:express.Response) => {
    try{
        const delId = req.params.id
        const del = pool.query("delete from products where id = ?",[delId])
        res.json({
            message: "the product deleted successfully",
            id: `where id ${delId}`,
            data: del
        })
    }catch(err){
        const error = err as Error
        res.status(400).json({message: error.message})
    }
});



export default router 