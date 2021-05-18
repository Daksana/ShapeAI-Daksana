const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res)=> {
  res.sendFile(__dirname+"/index.html");

});

app.post("/", (req, res) =>{
var n1= number(req.body.num1);
var n2= number(req.body.num2);
var result= n1+n2;
res.send("The answer is "+result);

});



app.listen(3000, function(){
  console.log("Server as started on port 3000");
});
