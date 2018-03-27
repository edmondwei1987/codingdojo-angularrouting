import { Component, OnInit } from '@angular/core';
import {ShintoService} from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
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
  buyShintoCoin(){
    if(this.amount>0){
      this._shintoService.addTransRecord(this.amount,'buy');
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
