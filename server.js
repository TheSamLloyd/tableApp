const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
var PORT = (process.env.PORT || 80);
var totalTables = 5;
var reservations=[];
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index.html", function(req,res){
	res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/front.js",function(req,res){
	res.setHeader("content-type","text/javascript")
	res.sendFile(path.join(__dirname,"front.js"));
})
app.get("/reservation.html", function(req,res){
	res.sendFile(path.join(__dirname, "reservation.html"))
});
app.get("/tables.html", function(req,res){
	res.sendFile(path.join(__dirname, "tables.html"))
});
app.get("/api/tables",function(req,res){
	res.send(JSON.stringify(reservations));
})
app.post("/api/new",function(req,res){
	reservations.push(req.body);
	console.log(req.body);
	if (reservations.length>totalTables){
		res.send(false);
	}
	else{
		res.send(true);
	}
})
app.listen(PORT, function(){
	console.log("App running on port "+PORT);
})