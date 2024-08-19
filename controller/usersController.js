import { getUserDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB } from '../model/usersDb.js'
const fetchUsers = async(req,res)=>{
    res.json(await getUsersDb())
}
const fetchUser = async(req,res)=>{
    res.json(await getUsersDb(req.params.id))
}
const insertUser = async(req,res)=>{
    let {userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} =req.body
    await insertUserDb(userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
    res.send('Data was inserted successfully')
}
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send('Peer has been deleted')
}
const updatePeer = async(req,res)=>{
    let {name,age,colour,food} = req.body
    let peer = await getPeerDb(req.params.id)
    name ? name=name: name = peer.peer_name
    age ? age=age: age = peer.peer_age
    colour ? colour=colour: colour = peer.peer_fav_colour
    food ? food=food: food = peer.peer_fav_food
    await updatePeerDB(req.params.id,name,age,colour,food)
    res.send('Update was successful')
}
export {fetchPeers, fetchPeer, insertPeer, deletePeer, updatePeer}