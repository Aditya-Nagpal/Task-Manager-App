const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const port=9000;
const db=require('./config/mongoose');
const Task=require('./models/task');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes/index'));

app.post('/add-task',async function(req,res){
    try {
        console.log(req.body);
        // const newTask=await Task.create(req.body);
        return res.redirect('back');
    } catch (error) {
        console.log('Error in adding new task.',error);
        return;
    }
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in connecting to server ${err}`);
        return;
    }
    console.log(`Server connected successfully ${port}`);
});