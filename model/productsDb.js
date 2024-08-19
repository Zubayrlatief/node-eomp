// import {pool} from '../config/config.js'
import {createPool} from 'mysql2/promise'
import {config} from 'dotenv'

config()

const pool =createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

const getPeersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM peers')
    return data;
} 

const getPeerDb = async (id) =>{
    let[[data]] = await pool.query('SELECT * FROM peers WHERE id = ?',[id])
    return data
}

const insertPeerDb = async(name, surname, age, colour, food) =>{
    let [data] = await pool.query(`
        INSERT INTO peers (name, surname, age, fav_colour, fav_food)
        VALUES (?,?,?,?,?)
        `, [name, surname, age, colour, food])
}

const deletePeerDb = async(id) =>{
    await pool.query(`
    DELETE FROM peers 
    WHERE id = ?`,[id])
}

const updatePeerDb = async(id) =>{
    await pool.query(`
    UPDATE peers
    SET name = ? surname = ? age ? fav_colour = ? fav_food = ?
    WHERE id = ?`,[name, surname, age, colour, food, id])
}

console.log(await getPeersDb());

export {getPeersDb, getPeerDb, insertPeerDb, deletePeerDb, updatePeerDb}