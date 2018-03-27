import { Component, OnInit } from '@angular/core';
import {ShintoService} from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  amount:number;
  showError:boolean;
  shintoCoins:number;
  value:number;

  constructor(private _shintoService:ShintoService) {
    this.showError=false;
  }

  ngOnInit() {
    this.setShintoCoins();
    this.setvalue();
  }
  sellShintoCoins(){
    if(this.amount>0&&this.amount<this.shintoCoins){
      this._shintoService.addTransRecord(this.amount,'sell');
      this.amount=0;
      this.showError=false;
      this.setShintoCoins();
      this.setvalue();
    }else{
      this.showError=true;
    }
  }
  setShintoCoins(){
    this.shintoCoins=this._shintoService.getcoins();
  }
  setvalue(){
    this.value=this._shintoService.getvalue()*this._shintoService.getcoins();
  }

}
