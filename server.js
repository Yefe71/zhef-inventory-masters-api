import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from 'cors'

import knex from 'knex'

import grabDataValTot from "./controllers/grabDataValTot.js";
import grabDataValQua from "./controllers/grabDataValQua.js";



// HAHA
const db = knex({
    client: "pg",
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'smart-brain' 
    }
  });
  

// const db = knex({
//   client: "pg",
//   connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: { rejectUnauthorized: false },
//   }
// });
  
const app = express();
app.use(cors({ origin: true }));
app.use(express.json())


app.get('/grabdata2', (req, res) => {grabDataValQua(req, res, db)})

//ROOT
app.get('/', (req, res) => {
    res.send("It is working")
})



//getAllData
app.get('/grabdata', (req, res) => {grabDataValTot(req, res, db)})




app.listen(3000, () => {
    console.log(`app is running on port 3000`)
})


// app.listen(3000, () => {
//     console.log(`app is running on port ${process.env.PORT}`)
// })

