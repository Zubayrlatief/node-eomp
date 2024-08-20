import { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb } from '../model/productsDb.js'
const fetchProducts = async(req,res)=>{
    res.json(await getProductsDb())
}

//fetch//get
const fetchProduct = async(req,res)=>{
    res.json(await getProductsDb(req.params.id))
}

//insert//add
const insertProduct = async(req,res)=>{
    let {prodID, prodName, quantity, amount, Category, prodUrl } =req.body
    await insertProdctDb(prodID, prodName, quantity, amount, Category, prodUrl)
    res.send('Data was inserted successfully')
}

//delete
const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.id)
    res.send('Peer has been deleted')
}

//update
const updateProduct = async(req,res)=>{
    let {userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getProductDb(req.params.id)
    userID ? name=name: name = peer.peer_name
    age ? age=age: age = peer.peer_age
    colour ? colour=colour: colour = peer.peer_fav_colour
    food ? food=food: food = peer.peer_fav_food
    await updateProductsDB(req.params.userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
    res.send('Update was successful')
}
export {fetchProducts, fetchProduct, insertProduct, deleteProduct, updateProduct}