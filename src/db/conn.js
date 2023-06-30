const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Uj293:Abc123456@@cluster0.mra0ozl.mongodb.net/infostic_database?retryWrites=true&w=majority').then(()=>{
    console.log('connection successful')
}).catch((e)=>{
    console.log('no connection')
})