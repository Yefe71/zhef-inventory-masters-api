import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from 'cors'
import knex from 'knex'
import handleRegister from "./controllers/register.js";
import handleSignin from "./controllers/signin.js";
import handleProfile from "./controllers/profile.js";
import handleImage from "./controllers/image.js";

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



//ROOT
app.get('/', (req, res) => {
    res.send("It is working")
})

//SIGN IN
app.post('/signin', (req, res) => {handleSignin(req, res, db, bcrypt)})


//REGISTER
app.post('/register', (req, res) => {handleRegister(req, res, db, bcrypt)})


//PROFILE
app.get('/profile/:id', (req, res) => {handleProfile(req, res, db)})
    

//IMAGE
app.put('/image', (req, res) => {handleImage(req, res, db)})


app.listen(3000, () => {
    console.log(`app is running on port 3000`)
})


// app.listen(3000, () => {
//     console.log(`app is running on port ${process.env.PORT}`)
// })

