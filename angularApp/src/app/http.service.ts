import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }

  getWeatherInfo(city){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?APPID=b3ca262aaf328930d22918e87d1bba3b&q='+city);
  }
  // getWeatherImage(city){
  //   return this._http.get('/getImage/'+city);
  // }

}
