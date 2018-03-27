import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author:any;
  quote:String;
  constructor(private _route:ActivatedRoute,private _router:Router,private _authorService:AuthorService) {
    this.author={name:'',quotes:[]}
    this._route.paramMap.subscribe((params)=>{
      this._authorService.getAuthor(params.get('id')).subscribe(data=>{
        this.author=data;
      });
    });
  }

  ngOnInit() {
  }
  addQuote(){
    this._authorService.addQuote(this.author._id,this.quote).subscribe(data=>{
      this._router.navigate(['/quotes',this.author._id]);
    })
  }

}
