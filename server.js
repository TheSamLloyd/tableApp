const express = require('express');
const http = require('http');
const app = express();
var PORT = (process.env.PORT || 80);
var totalTables = 5;
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function(req,res){
	res.sendFile(path.join(__dirname, "reservation.html"))
});
app.get("/tables", function(req,res){
	res.sendFile(path.join(__dirname, "tables.html"))
});