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

// //delete

const deleteProductDb = async (prodID) => {
    try {
        // Execute the delete query
        const result = await pool.query(`
            DELETE FROM products WHERE prodID = ?`, [prodID]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            console.log(`No product found with ID ${prodID}.`);
            throw new Error('User not found'); // Optionally, throw an error to indicate no user was found
        }

        console.log(`product with ID ${prodID} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting product with ID ${prodID}:`, error);
        throw new Error('Failed to delete product'); // Optionally, throw an error to be caught by the calling function
    }
};
// const deleteProductDb = async (prodID) => {
//     await pool.query(`
//     DELETE FROM products
//     WHERE prodID = ?`, [prodID]);
// };


//update//patch
const updateProductDb = async (prodID, prodName, quantity, amount, Category, prodUrl) => {
    await pool.query(`
    UPDATE products
    SET prodName = ?, quantity = ?, amount = ?, Category = ?, prodUrl = ?
    WHERE prodID = ?`, [prodName, quantity, amount, Category, prodUrl, prodID]);
};

export { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb };