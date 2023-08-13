const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/task_list_db');
const db=mongoose.connection;
// If error.
db.on('Error',console.error.bind(console,'Error connecting to db'));
// If working.
db.once('open',function (){
    console.log("Server conneted to database");
});