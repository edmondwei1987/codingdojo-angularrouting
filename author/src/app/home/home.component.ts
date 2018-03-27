import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors:any;
  constructor(private _authorService:AuthorService) {
    this.authors={status:'',data:[]};
    this.setAuthors();
  }

  ngOnInit() {
  }
  setAuthors(){
    var obs=this._authorService.getAuthors();
    obs.subscribe(data=>{
      this.authors=data;
    })
  }
  delete(id){
    var obs=this._authorService.deleteAuthor(id);
    obs.subscribe(data=>{
      this.setAuthors();
    });
  }

}
