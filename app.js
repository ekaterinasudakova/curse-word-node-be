console.log("hello world from Node!");
console.log(__dirname);

let fs = require('fs');
let colors = require('colors');
let http = require('http');

fs.readFile(__dirname + '/message.txt', {encoding:'utf-8'}, (err, data) => {
    console.log("got file".rainbow);
    console.log(err, data)
});

http.createServer(function (req,res){
    console.log(`you got a request on port 1337`.red)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {"content-type": "text/html"})

    var words = ["fuck", "dick", "cunt", "ass", "ugly"];
    

    if (req.url === "/pg13"){
        word = "butt";
    }

    res.end(words[Math.floor(Math.random() * words.length)]);
}).listen(1337)