const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081

// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// 4 http GET default page at /
app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })

   app.get("/index", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })
   
   
   // 4 http GET /tic-tac-toe
   app.get("/tic-tac-toe", function (req, res) {
    res.render("tic-tac-toe.ejs")
   })
   
   // 4 http GET /about
   app.get("/about", function (req, res) {
    res.render("about.ejs")
   })
   
   // 4 http GET /contact
   app.get("/contact", function (req, res) {
    res.render("contact.ejs")
   })

   // 5 http POST /contact
   app.post("/contact",function(req,res){
    var api_key = '3cb530598bafbfbdc1007bb03dc98040-4836d8f5-dd80b7e8';
    var domain = 'sandboxd9fa1a19e26346e1be8c40737626bba9.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    const fname=req.body.firstname;
    const lname=req.body.lastname;
    const email=req.body.email;
    const gender1=req.body.gender;
    const gender2=req.body.gender;
    const gender3=req.body.gender;
    
    const comment=req.body.message;
    
    const phone=req.body.phone;
    const isError=true;
    var data = {
      from: 'postmaster@sandboxd9fa1a19e26346e1be8c40737626bba9.mailgun.org',
      to: 'keerthisree9595@gmail.com',
      subject: lname+ 'has sent you a message',
      html: "<b>Email</b>" +email
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      
      console.log('\nCONTACT FORM DATA: '+name+' '+email+' '+comment+'\n');
      if(!error)
      res.alert("message sent")
      else
      res.alert("there is an error ,message not sent")
    });


    })


 // 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
    res.render("404")
   })
   
   // Listen for an application request on designated port
   //app.listen(port, function () {
    //console.log('Web app started and listening on http://localhost:' + port)
    http.listen(process.env.PORT||8081, function () {
        console.log('Guestbook app listening on http://127.0.0.1:8081/')
   })