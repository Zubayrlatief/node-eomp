import {pool} from '../config/config.js'
const getPeersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM peers')
    return data
}
const getPeerDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM peers WHERE peers_id = ?',[id])
    return data
}
const insertPeerDb = async(name, age, color,food) =>{
    let [data] = await pool.query(`
        INSERT INTO peers
        (peer_name,peer_age,peer_fav_colour,peer_fav_food)
        VALUES (?,?,?,?)
        `,[name,age,color,food])
    return 'hehe'
}
const deletePeerDb = async(id) =>{
    await pool.query('DELETE FROM peers WHERE peers_id = ?', [id])
}
const updatePeerDB = async (id,name,age,colour,food)=>{
    await pool.query('UPDATE peers SET peer_name = ?,peer_age = ?, peer_fav_colour = ?,peer_fav_food = ?  WHERE peers_id = ?',[name,age,colour,food,id]
    )
}
// console.log(await insertPeer('Matthew','23','purple','gatsby'))
console.log(await getPeersDb());
// console.log(await getPeer(1));
export {getPeersDb, getPeerDb, insertPeerDb, deletePeerDb, updatePeerDB}



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
