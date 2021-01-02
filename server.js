const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Record = require('./api/models/model');
const routes = require('./api/routes/routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const username = "";
const password = "";
const db_name = "";
const url = "mongodb+srv://"+username+":"+password+"@cluster0.spbeh.mongodb.net/"+db_name+"?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
try{
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log("Connected");
    });
} catch(err)
{
    console.log(err);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, function() {
    console.log('listening on ' + port);
});