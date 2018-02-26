var express = require("express");
var bodyParser = require("body-parser");
var studentRoutes = require("./routes");
var app = express();
app.use(bodyParser.json());
app.use("/", Routes);


var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Express server is up and running.");
    });