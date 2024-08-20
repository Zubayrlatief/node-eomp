import { getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb } from '../model/usersDb.js'
import { hash } from 'bcrypt'
const fetchUsers = async(req,res)=>{
    res.json(await getUsersDb())
}

//fetch//get
const fetchUser = async(req,res)=>{
    res.json(await getUsersDb(req.params.id))
}

//insert//add
const insertUser = async(req,res)=>{
    let {userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} =req.body

    hash(userPass, 10, async(err,hashedP) =>{
    await insertUserDb(userID, firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
    res.send('Data was inserted successfully')
    })
}

//delete
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send('Peer has been deleted')
}

//update
const updateUser = async(req,res)=>{
    let {userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUserDb(req.params.id)
    userID ? name=name: name = peer.peer_name
    age ? age=age: age = peer.peer_age
    colour ? colour=colour: colour = peer.peer_fav_colour
    food ? food=food: food = peer.peer_fav_food
    await updateUserDB(req.params.userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
    res.send('Update was successful')
}
export {fetchUsers, fetchUser, insertUser, deleteUser, updateUser}