import { Component, OnInit } from '@angular/core';
import {ShintoService} from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  transactions:any;
  value:number;
  constructor(private _shintoService:ShintoService) {
    this.transactions=this.getTransactions();
    this.value=this.getvalue();
    console.log(this.transactions);
  }

  ngOnInit() {
  }
  getvalue(){
    return this._shintoService.getvalue();
  }
  getTransactions(){
    return this._shintoService.getTransactions();
  }
  setCurrentTransId(id){
    this._shintoService.setCurrentTransId(id);
  }
}
