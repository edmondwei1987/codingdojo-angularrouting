var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var path=require('path');
app.use(express.static(path.join(__dirname,'./shintoCoins/dist')));
app.all('*',(req,res,next)=>{
  res.sendFile(path.resolve('./shintoCoins/dist/index.html'));
})
app.listen(4200,()=>{
  console.log('listen on port 4200');
})
