import { Injectable } from '@angular/core';

@Injectable()
export class ShintoService {
  value:number;
  transactions:any;
  trans_id:number;
  transRecord:any;
  coins:number;
  currentTrans_id:number;
  constructor() {
    this.trans_id=1;
    this.value=1;
    // this.transactions=[{trans_id:'',action:'',amount:0}];
    this.transactions=[];
    this.coins=0;
  }
  getTransactions(){
    return this.transactions;
  }
  addTransRecord(amount,action){
    if(action=='sell'){
      this.coins-=parseInt(amount);
    }else{
      this.coins+=parseInt(amount);
    }
    this.transactions.push({trans_id:this.trans_id++,action:action,amount:amount});
    console.log(this.coins);
  }
  getcoins(){
    console.log(this.coins);
    return this.coins;
  }
  getvalue(){
    return this.value;
  }
  setCurrentTransId(id){
    this.currentTrans_id=id;
  }
  getCurrentTransaction(){
    for(let i in this.transactions){
      if(this.transactions[i].trans_id==this.currentTrans_id){
        return this.transactions[i];
      }
    }
  }

}
