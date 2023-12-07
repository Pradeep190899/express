const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log('in the middlewaare');
    next();
});
app.use((req,res,next)=>{
    console.log('in other middleware');
res.send('<h1>hello sir</h1>')
});
const server = http.createServer(app);
server.listen(3000);