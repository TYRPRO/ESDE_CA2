
const express=require('express');
const serveStatic=require('serve-static');
const hsts = require('hsts')
const https = require('https');
var app=express();

app.enable('trust proxy');



// SSL
const fs = require('fs');
const options = {
  key: fs.readFileSync('C:/WINDOWS/system32/localhost-key.pem'),
  cert: fs.readFileSync('C:/WINDOWS/system32/localhost.pem'),
};




app.use(function(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(req.path);
    console.log(req.query.id);
    //Checking the incoming request type from the client
    if(req.method!="GET"){
        res.type('.html');
        var msg='<html><body>This server only serves web pages with GET request</body></html>';
        res.end(msg);
    }else{
        next();
    }
});


app.use(function(req, res, next) {
  console.log('running check here')
  if (!req.secure) {
    console.log('redirecting supposed to happen...')
     return res.redirect("https://" + req.headers.host + req.url);
  }

  next();
})


app.use(hsts({
  maxAge: 31536000,        // Must be at least 1 year to be approved
  includeSubDomains: true, // Must be enabled to be approved
  preload: true
}))


app.use(serveStatic(__dirname+"/public"));



https
  .createServer(options, app).listen(3001,'localhost')


app.get("/", (req, res) => {
    res.sendFile("/public/home.html", { root: __dirname });
});