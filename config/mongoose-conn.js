const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')("dev:mongoose");

//console.log("Loaded Configuration:", config);

const mongoURI = config.get("MONGODB_URI");
dbgr("MONGODB_URI:", mongoURI);

mongoose
.connect(`${mongoURI}/myshopapp`, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
})
.then(function(){
    dbgr("connected..");
})
.catch(function(err){
    dbgr(err);
});

module.exports = mongoose.connection;