import {createPool} from 'mysql2/promise'
//promise- allows to handle asynchronys
import {config} from 'dotenv'
config()

const pool =createPool({
     host: process.env.HOST,
     user: process.env.USER,
     database: process.env.DATABASE,
     password: process.env.PASSWORD
})

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}
const getUserDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?',[id])
    return data
}
const insertUserDb = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) =>{
    let [data] = await pool.query(`
        INSERT INTO users
        (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
        VALUES (?,?,?,?)
        `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
    return data
}
const deleteUserDb = async(id) =>{
    await pool.query(`
    DELETE FROM users WHERE userID = ?`, [id])
}

const updateUserDb = async(id) =>{
    await pool.query(`
    UPDATE users
    SET firstName = ?,lastName = ?, userAge = ?,Gender = ?, userRole = ?,emailAdd = ?,userPass = ?,userProfile = ?  
    WHERE userID = ?`,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
}
// console.log(await insertPeer('Matthew','23','purple','gatsby'))
console.log(await getUsersDb());
// console.log(await getPeer(1));
export {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb}



// import {pool} from '../config/config.js'
// // import{createPool} from 'mysql2/promise'
// // import {config} from 'dotenv'
// // config()

// // const pool = createPool({
// //      host: process.env.HOST,
// //      user: process.env.USER,
// //      database: process.env.DATABASE,
// //      password: process.env.PASSWORD
// // })

// const getPeers = async ()=>{
//     let [data] = await
//     pool.query('SELECT * From peers')
//     return data
// }

// const getPeer = async () =>{
//     let [data] = await pool.query(`SELECT * FROM peers
//     WHERE id = ?`, [id])
//     return data
// }

// //console.log(await getPeer(1));

// export {getPeers, getPeer}
// //pool save
