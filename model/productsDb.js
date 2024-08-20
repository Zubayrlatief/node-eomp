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

const insertProductDb = async (Name, quantity, amount, Category, Url) => {
    let [data] = await pool.query(`
        INSERT INTO products 
        (Name, quantity, amount, Category, Url)
        VALUES (?,?,?,?,?)
        `, [Name, quantity, amount, Category, Url]);
};

const deleteProductDb = async (id) => {
    await pool.query(`
    DELETE FROM products
    WHERE id = ?`, [id]);
};

const updateProductDb = async (id, Name, quantity, amount, Category, Url) => {
    await pool.query(`
    UPDATE products
    SET Name = ?, quantity = ?, amount = ?, Category = ?, Url = ?
    WHERE id = ?`, [Name, quantity, amount, Category, Url, id]);
};

export { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb };