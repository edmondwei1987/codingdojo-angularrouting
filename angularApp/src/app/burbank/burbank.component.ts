import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather:any;
  image="url(assets/images/burbank.jpg)";

  constructor(private _httpService:HttpService) {
    this.weather={main:{temp_max:0,temp_min:0,temp:0,humidity:0},wind:{speed:0},weather:[{main:''}]}
  }

  ngOnInit() {
    let obs=this._httpService.getWeatherInfo('burbank');
    obs.subscribe(data=>{
      this.weather=data;
    });
  }

}
