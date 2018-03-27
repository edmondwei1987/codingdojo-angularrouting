import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getproductsList(){
    return this._http.get('/api/products');
  }
  newProduct(product){
    return this._http.post('/api/products',product);
  }
  deleteProduct(id){
    return this._http.delete('/api/products/'+id);
  }
  getproduct(id){
    return this._http.get('/api/products/'+id);
  }
  updateProduct(product){
    return this._http.put('/api/products/'+product._id,product);
  }
}
