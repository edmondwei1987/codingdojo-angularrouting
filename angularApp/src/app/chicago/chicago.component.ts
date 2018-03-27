import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather:any;
  city='chicago';
  image:string;

  constructor(private _httpService:HttpService) {
    this.weather={main:{temp_max:0,temp_min:0,temp:0,humidity:0},wind:{speed:0},weather:[{main:''}]}
    this.image="url(assets/images/"+this.city+".jpeg)";
  }

  ngOnInit() {
    let obs=this._httpService.getWeatherInfo(this.city);
    obs.subscribe(data=>{
      this.weather=data;
    });
  }

}
