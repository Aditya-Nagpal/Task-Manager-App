const express=require('express');
const app=express();
const port=9000;

app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in connecting to server ${err}`);
        return;
    }
    console.log(`Server connected successfully ${port}`);
});