var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
//mongo db
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codingdojo');
var AuthorSchema=new mongoose.Schema({
  name:{type:String},
  quotes:[{
    content:{type:String,minlength:3},
    votes:{type:Number,default:0}
  }],
});
mongoose.model('Author',AuthorSchema);
var Author=mongoose.model('Author');
//--end mongo db
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/author/dist')));

app.get('/api/authors',(req,res)=>{
  Author.find({},(err,authors)=>{
    if(err){
      return res.json({status:'fail',data:err});
    }else{
      return res.json({status:'success',data:authors});
    }
  })
});
app.post('/api/authors',(req,res)=>{
  Author.create({name:req.body.name},(err,msg)=>{
    if(err){
      return res.json({status:'fail',data:err});
    }else{
      return res.json({status:'success',data:msg});
    }
  });
});
app.delete('/api/author/:id',(req,res)=>{
  Author.remove({_id:req.params.id},(err,msg)=>{
    if(err){
      res.json({status:'fail'});
    }else{
      res.json({status:'success'});
    }
  });
});
app.get('/api/authors/:id',(req,res)=>{
  Author.findById(req.params.id,(err,author)=>{
    if(err){
      res.json({status:'fail',data:err});
    }else{
      res.json(author);
    }
  });
});
app.put('/api/authors/:id',(req,res)=>{
  console.log(req.body)
  Author.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name}},(err)=>{
    if(err){
      res.json({status:'fail'});
    }else{
      res.json({status:'success'});
    }
  })
});
app.post('/api/authors/:id',(req,res)=>{
  Author.findOne({_id:req.params.id},(err,author)=>{
    if(err){
      res.json(err)
    }else{
      author.quotes.push({content:req.body.quote});
      author.save();
      res.json(author);
    }
  });
})
app.post('/api/authors/:author_id/quotes/:quote_id',(req,res)=>{
  // console.log('inapp');
  Author.findOne({_id:req.params.author_id},(err,author)=>{
    var myQuote=author.quotes.id(req.params.quote_id);
    if(req.body.vote=='up'){
      myQuote.votes++;
    }else{
      myQuote.votes--;
    }
    author.save((err)=>{
      if(err){
        res.json(err);
      }else{
        res.json(author);
      }
    });
  });
});
app.delete('/api/authors/:author_id/quotes/:quote_id',(req,res)=>{
  Author.findOne({_id:req.params.author_id},(err,foundAuthor)=>{
    foundAuthor.quotes.id(req.params.quote_id).remove();
    foundAuthor.save((err)=>{
      if(err){
        res.json(err);
      }else{
        res.json(foundAuthor);
      }
    });
  });
});

app.all('*',(req,res,next)=>{
  res.sendFile(path.resolve('./author/dist/index.html'));
})
app.listen(8000,()=>{
  console.log('listen on port 8000');
})
