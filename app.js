
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
var homeRoutes = require('./routes/homeRoutes')
//console.log(homeRoutes.routes)

app.use(bodyParser.urlencoded({extended : true}));


app.use(bodyParser.json())


app.use(express.static(path.join(__dirname,'public')));


app.use('/',  (req,res)=> {
    res.sendFile(path.join(__dirname, './', 'index.html'));
});



app.listen(80);