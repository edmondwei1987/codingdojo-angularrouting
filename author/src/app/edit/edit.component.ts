import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  author:any;
  constructor(private _route:ActivatedRoute,private _router:Router,private _authorService:AuthorService) {
    this.author={name:String,quotes:[]};
    this._route.params.subscribe((params:Params)=>{
      this.id=params['id'];
      let obs=this._authorService.getAuthor(this.id);
      obs.subscribe(data=>{
        // console.log(data);
        this.author=data
      })
    });
  }

  ngOnInit() {
  }
  updateAuthor(){
    let obs=this._authorService.updateAuthor({id:this.id,name:this.author.name});
    obs.subscribe(data=>{
      console.log(data);
      this._router.navigate(['/home']);
    });
  }

}
