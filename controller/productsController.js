import { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb } from '../model/productsDb.js'

//fetch all products
const fetchProducts = async(req,res)=>{
    res.json(await getProductsDb())
}

//fetch//get
const fetchProduct = async(req,res)=>{
    res.json(await getProductsDb(req.params.id))
}

//insert//add
const insertProduct = async(req,res)=>{
    let { prodName, quantity, amount, Category, prodUrl } =req.body
    await insertProductDb( prodName, quantity, amount, Category, prodUrl )
    res.send('product was inserted successfully')
}

//delete
const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.id)
    res.send('product has been deleted')
}

//update
const updateProduct = async(req, res) => {
    let { prodName, quantity, amount, Category, prodUrl } = req.body;
    await updateProductDb(req.params.prodID, prodName, quantity, amount, Category, prodUrl);
    res.send('Product has been updated');
}
export {fetchProducts, fetchProduct, insertProduct, deleteProduct, updateProduct}