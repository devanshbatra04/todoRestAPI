var express = require('express');

app = express();
port = process.env.PORT || 3000

var mongoose = require('mongoose'),
    Task = require('./api/models/todoModel'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todoAPI",function(err,x){
    console.log("DB connected");
});


var routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port, function(){
    console.log("server started on port: " + port);
});