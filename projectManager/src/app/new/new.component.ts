import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product:any;
  constructor(private _httpService:HttpService,private _router:Router) { 
    this.product={
      name:'',
      price:null,
    }
  }

  ngOnInit() {
  }
  newProduct(){
    let obs=this._httpService.newProduct(this.product);
    obs.subscribe(data=>{
      console.log(data);
      this._router.navigate(['/list']);
    });
  }

}
