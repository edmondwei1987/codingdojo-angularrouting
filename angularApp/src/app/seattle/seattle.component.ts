import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather:any;
  image='url(assets/images/seattle.jpeg)';

  constructor(private _httpService:HttpService) {
    this.weather={main:{temp_max:0,temp_min:0,temp:0,humidity:0},wind:{speed:0},weather:[{main:''}]}
  }

  ngOnInit() {
    let obs=this._httpService.getWeatherInfo('seattle');
    obs.subscribe(data=>{
      // console.log(data);
      this.weather=data;
    })
  }

}
