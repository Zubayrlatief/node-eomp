import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

// Get all products
const getProductsDb = async () => {
    let [data] = await pool.query('SELECT * FROM products');
    return data;
};

// Get single product from ID
const getProductDb = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?', [id]);
    return data;
};


// Insert//add a single product
const insertProductDb = async (prodName, quantity, amount, Category, prodUrl) => {
    try {
        let [data] = await pool.query(`
            INSERT INTO products 
            (prodName, quantity, amount, Category, prodUrl)
            VALUES (?, ?, ?, ?, ?)
        `, [prodName, quantity, amount, Category, prodUrl]);
        console.log("Product inserted successfully.");
    } catch (error) {
        console.error("Error inserting product into the database:", error);
        throw error;
    }
};

//delete a product by id
const deleteProductDb = async (prodID) => {
    try {
        const result = await pool.query(`
            DELETE FROM products WHERE prodID = ?`, [prodID]);

        if (result.affectedRows === 0) {
            console.log(`No product found with ID ${prodID}.`);
            throw new Error('User not found');
        }

        console.log(`product with ID ${prodID} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting product with ID ${prodID}:`, error);
        throw new Error('Failed to delete product');
    }
};

//update//patch a product
const updateProductDb = async(prodName, quantity, amount, category, prodUrl, id) =>{
    await pool.query(`
        UPDATE products SET prodName = ?,quantity = ? ,amount = ? ,category = ?,prodUrl = ? ,
        WHERE prodID = ?`, [prodName, quantity, amount, category, prodUrl, id])
}
export { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb };