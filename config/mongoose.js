const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/task_list_db');
const db=mongoose.connection;
// if error.
db.on('Error',console.error.bind(console,'Error connecting to database'));
// if working.
db.once('open',function(){
    console.log("Server connected to database.");
});