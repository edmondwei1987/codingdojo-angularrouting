import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author:any={name:'',quotes:[]};
  constructor(private _route:ActivatedRoute,private _router:Router,private _authorService:AuthorService) { 
    // this.author={name:String,quotes:[{content:'',votes:0}]};
    this._route.paramMap.subscribe((params)=>{
      this._authorService.getAuthor(params.get('id')).subscribe(data=>{
        this.author=data;
      })
    })
  }

  ngOnInit() {
  }
  voteUp(quote_id){
    this._authorService.vote(this.author._id,quote_id,'up').subscribe(data=>{
      this.author=data;
    });
  }
  voteDown(quote_id){
    this._authorService.vote(this.author._id,quote_id,'down').subscribe(data=>{
      this.author=data;
    });
  }
  delete(quote_id){
    this._authorService.deleteQuote(this.author._id,quote_id).subscribe(data=>{
      this.author=data;
    });
  }

}
