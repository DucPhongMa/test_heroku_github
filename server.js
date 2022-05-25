/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Duc Phong Ma____Student ID: __137015194__ Date: __May 13, 2022_
*
*  Online (Heroku) URL: https://nameless-headland-14758.herokuapp.com/
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Duc Phong Ma - 137015194");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {
    console.log(`Example app listening at http://localhost:${HTTP_PORT}`)
});