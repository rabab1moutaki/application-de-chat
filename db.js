const mongoose = require('mongoose');

 mongoose.connect ('mongodb+srv://moutakirabab:vpRXqCKU5Sys1ovv@cluster0.7rqnae6.mongodb.net/chat?retryWrites=true&w=majority')
 .then(() =>{
    console.log('Connected to DB');
 })
 .catch(()=>{ 
 console.log('unable to connected to db');
 });