var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./projectManager/dist')));

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codingdojo');
var ProductSchema=new mongoose.Schema({
  name:{type:String},
  price:{type:Number},
});
mongoose.model('Product',ProductSchema);
var Product=mongoose.model('Product');

app.get('/api/products',(req,res)=>{
  Product.find({},(err,products)=>{
    if(err){
      res.json(err);
    }else{
      res.json(products);
    }
  });
})
app.post('/api/products',(req,res)=>{
  Product.create(req.body,(err,product)=>{
    if(err){
      res.json(err);
    }else{
      res.json(product);
    }
  })
});
app.delete('/api/products/:id',(req,res)=>{
  Product.remove({_id:req.params.id},(err,msg)=>{
    if(err){
      res.json(err);
    }else{
      res.json(msg);
    }
  })
});
app.get('/api/products/:id',(req,res)=>{
  Product.findOne({_id:req.params.id},(err,product)=>{
    if(err){
      res.json(err);
    }else{
      res.json(product);
    }
  });
});
app.put('/api/products/:id',(req,res)=>{
  Product.findOneAndUpdate({_id:req.params.id},req.body,(err,product)=>{
    if(err){
      res.json(err);
    }else{
      res.json(product);
    }
  })
});
app.all('*',(req,res,next)=>{
  res.sendFile(path.resolve('./projectManager/dist/index.html'));
});

app.listen(8000,function(){
  console.log('listen on port 8000');
})
