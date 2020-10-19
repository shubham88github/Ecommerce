var h= require("http");

var s=h.createServer(function(req,res){
   res.writeHead(200,{'Contex-type':'text/html'});
    res.write("<h1>WELCOME TO NODE<h1>");

  res.end();

});

s.listen(8100);
console.log("server is runnig on 8100");