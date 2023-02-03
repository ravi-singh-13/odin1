let http = require('http');
let fs = require('fs');
let url = require('url')

function reqHandle(err, data, res){
 if(err){
    res.writeHead(404, {'Context-Type': 'text/html'});
    return res.write.end("404 not found");
 }
 res.writeHead(200, {'Context-Type':'text/html'});
 res.write(data);
 res.end();
}

http.createServer(function(req,res){
   let a = url.parse(req.url, true);
   let filename = "." + a.pathname;
   if(filename == './about.html' || filename == './contact-me.html' || filename == './'){
if(filename == './'){
    fs.readFile('./index.html',function(err, data) {reqHandle(err, data, res)})
}else{
    fs.readFile(filename, function(err, data) {reqHandle(err, data, res)})
}
   }else{
    fs.readFile('./404.html', function(err, data) {reqHandle(err, data, res)})
   }
}).listen(8080)