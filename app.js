var express = require('express');
var path=require('path');

var app=express();

//Static Resources
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('index');
});

app.listen(3000, ()=>{
    console.log("Application is running on port 3000");
});