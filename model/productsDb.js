import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

const getProductsDb = async () => {
    let [data] = await pool.query('SELECT * FROM products');
    return data;
};

const getProductDb = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?', [id]);
    return data;
};


//insert
const insertProductDb = async (prodName, quantity, amount, Category, prodUrl) => {
    let [data] = await pool.query(`
        INSERT INTO products 
        (prodName, quantity, amount, Category, prodUrl)
        VALUES (?,?,?,?,?)
        `, [prodName, quantity, amount, Category, prodUrl]);
};

//delete
const deleteProductDb = async (prodID) => {
    await pool.query(`
    DELETE FROM products
    WHERE prodID = ?`, [prodID]);
};


//update//patch
const updateProductDb = async (prodID, prodName, quantity, amount, Category, prodUrl) => {
    await pool.query(`
    UPDATE products
    SET prodName = ?, quantity = ?, amount = ?, Category = ?, prodUrl = ?
    WHERE prodID = ?`, [prodName, quantity, amount, Category, prodUrl, prodID]);
};

export { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb };