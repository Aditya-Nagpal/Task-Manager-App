const express=require('express');
const path=require('path');
const port=9000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes/index'));

app.listen(port,function (err){
    if(err){
        console.log("Error connecting to server.");
        return;
    }
    console.log("Connected to server.",port);
});