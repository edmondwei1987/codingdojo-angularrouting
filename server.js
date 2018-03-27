var express=require('express');
//Require Wrapper Library
const PexelsAPI = require('pexels-api-wrapper');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var path=require('path');
//set static folder
app.use(express.static(__dirname+'/angularApp/dist'));
// app.get('/getImage/:city',function(req,res){
// console.log('ininini');
// //Create Client instance by passing in API key
// var pexelsClient = new PexelsAPI("YOUR_API_KEY");
//
// //Search API
// pexelsClient.search(req.params.city)
//     .then(function(result){
//         return res.json(result);
//     }).
//     catch(function(e){
//         console.err(e);
//     });
//
// })
//redirect roots to angular
app.all('*',(req,res,next)=>{
  res.sendFile(path.resolve('./angularApp/dist/index.html'));
})
app.listen(4200,function(){
  console.log('listen on port 4200');
})
