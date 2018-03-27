import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product:any;
  constructor(private _route:ActivatedRoute,private _router:Router,private _httpService:HttpService) {
    this.product={name:'',price:null};
  }
  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this._httpService.getproduct(params.get('id')).subscribe(data=>{
        this.product=data;
      });
    });

   }
  update(){
    this._httpService.updateProduct(this.product).subscribe(data=>{
      this._router.navigate(['/list']);
      }
    );
  }
  delete(){
    // console.log('progress');
    this._httpService.deleteProduct(this.product._id).subscribe(data=>{
      // console.log(data);
      this._router.navigate(['/list']);
    });
  }


}
