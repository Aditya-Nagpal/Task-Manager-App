const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const port=9000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('/assets'));

app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in connecting to server ${err}`);
        return;
    }
    console.log(`Server connected successfully ${port}`);
});