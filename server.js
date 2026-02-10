const http = require('http');
const fs = require('fs');

// create http server 

const server = http.createServer((req , res) =>{

    // Read the text file 
    fs.readFile('data.txt' , 'utf8' , (err, data) => {
        if (err){
            res.writeHead(500 , { 'content-type': 'text/plan'});
            res.end('Error readiing  file');

        }

        else{
            res.writeHead(200 , {'content-type': 'text/plan'});
             res.end(data);
        }
    });
});

// start server 

server.listen(3000 , ()=>{
    console.log('server re-unning at http://localhost:3000');
});
