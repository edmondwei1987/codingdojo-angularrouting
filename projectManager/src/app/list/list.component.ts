import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:any;

  constructor(private _httpService:HttpService) {
    this.products=[{name:String,price:Number}];
  }

  ngOnInit() {
    this.getProductsList();
  }
  getProductsList(){
    let obs=this._httpService.getproductsList();
    obs.subscribe(data=>{
      this.products=data;
    });
  }
  delete(id){
    let obs=this._httpService.deleteProduct(id);
    obs.subscribe(data=>{
      console.log(data);
      this.getProductsList();
    })
  }
}
