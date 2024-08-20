//routes - contain paths for urls
//public - contains html page - shows the routes (get,post)
//model - invloves all code that dircley interactes with database, selcect query
//contoller - folder executes all the functions and end points(response.json)
//config - organizes code(containes enformation that links node to the mysql database)

// create package json file
// npm init -y
// npm install express
// npm install --save-dev rodeman
// set type = module

// node & MySQL
// create config.js file in config folder
// create .env file in main folder along with index.js
// install the following
// // bcrypt - npm i bcrypt
// // dotenv - npm i dotenv
// // nodemon - npm i --save-dev nodemon
// // express -npm i express
// // jsonwebtoken - npm i jsonwebtoken
// // mysql2 - npm
// // 


//command to create package json
//npm init -y
//"type": "module",
// npm i --save-dev nodemon
//npm i express mysql2
// npm i bcrypt
//npm i jsonwebtoken
//"dev":"nodemon index.js"
import express from 'express'

import productsRouter from './routes/productsRouter.js'
import usersRouter from './routes/usersRouter.js'

let port = process.env.PORT || 5001
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

//creating server
//port number must be dynamic and cant be the same as mysql

//npm run dev
//npm i dotenv after config file
// create env file
//make gitignore site
//node ./model/peersDb.js