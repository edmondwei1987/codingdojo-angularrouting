import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name:any;
  constructor(private _authorService:AuthorService) { }

  ngOnInit() {
  }
  newAuthor(){
    let obs=this._authorService.newAuthor(this.name);
    obs.subscribe(data=>{
      console.log(data);
      this.name='';
    })
  }

}
