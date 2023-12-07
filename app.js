const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))


app.use("/home",(req,res ,next)=>{
    console.log("in home")
    res.send('<h1>welcome home</h1>')
})
app.use('/add-product',(req,res)=>{

res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')

})
app.use("/product",(req,res)=>{
    console.log(req.body)
    res.redirect("/")
})
app.use( "/",(req,res,next)=>{
    console.log('in other middleware');
res.send('<h1>hello sir</h1>')
next() ;
});

app.listen(3000);