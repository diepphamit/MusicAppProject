 const express = require('express');
 const app = express();

 const mapper = require('automapper');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./api/routes/auth-router');
const userRoutes = require('./api/routes/user-router');
const songRoutes = require('./api/routes/song-router');
const userSongRoutes = require('./api/routes/user-song-router');

//parser request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//connect mongoose 
mongoose.connect("mongodb+srv://dbUser:"+
    "dbUserPassword"
    +"@cluster0.ykeib.mongodb.net/MusicAppDB?retryWrites=true&w=majority",
    { 
        promiseLibrary: global.Promise,
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
).then(() => console.log('connected'));


// Task = mongoose.model('User');
    //mongodb+srv://dbUser:<password>@cluster0.ykeib.mongodb.net/<dbname>?retryWrites=true&w=majority
    //const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:<password>@cluster0.ykeib.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

 app.use('/api/auth', authRoutes);
 app.use('/api/users', userRoutes);
 app.use('/api/songs', songRoutes);
 app.use('/api/usersongs', userSongRoutes);


//  module.exports = app;

// const axios = require("axios");

// app.use('/user', (req, res, next) => {
//     axios({
//         "method":"GET",
//         "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
//         "headers":{
//         "content-type":"application/octet-stream",
//         "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
//         "x-rapidapi-key":"bc09b16879mshb1a35e6d344a600p1e9d85jsnc8e9451c006f",
//         "useQueryString":true
//         },"params":{
//         "q":"eminem"
//         }
//         })
//         .then((response)=>{
//             res.status(200).json(response.data);
//         })
//         .catch((error)=>{
//           console.log(error)
//         })
// });

// app.use('/album', (req, res, next) => {
//     const songId = 1109731;
//     let albumId = 0;
    
//     axios({
//         "method":"GET",
//         "url":"https://deezerdevs-deezer.p.rapidapi.com/track/" + songId,
//         "headers":{
//         "content-type":"application/octet-stream",
//         "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
//         "x-rapidapi-key":"bc09b16879mshb1a35e6d344a600p1e9d85jsnc8e9451c006f",
//         "useQueryString":true
//         }
//         })
//         .then((response)=>{
//             albumId = response.data.album.id;
            
//             axios({
//                 "method":"GET",
//                 "url":"https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId,
//                 "headers":{
//                 "content-type":"application/octet-stream",
//                 "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
//                 "x-rapidapi-key":"bc09b16879mshb1a35e6d344a600p1e9d85jsnc8e9451c006f",
//                 "useQueryString":true
//                 }
//                 })
//                 .then((response)=>{
    
//                     //console.log(response)
//                     res.status(200).json(response.data.tracks)
//                 })
//                 .catch((error)=>{
//                   console.log(error)
//                 })
//         })
//         .catch((error)=>{
//           console.log(error)
//         })

        

    
// });



module.exports = app;