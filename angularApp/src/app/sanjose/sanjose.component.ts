import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather:any;
  image='url(assets/images/sanjose.jpeg)';

  constructor(private _httpService:HttpService) {
    this.weather={main:{temp_max:0,temp_min:0,temp:0,humidity:0},wind:{speed:0},weather:[{main:''}]}
  }

  ngOnInit() {
    let obs=this._httpService.getWeatherInfo('san jose');
    obs.subscribe(data=>{
      this.weather=data;
    })
    // let obsImage=this._httpService.getWeatherImage('san jose');
    // obsImage.subscribe(data=>{
    //   console.log(data);
    // })
  }

}
