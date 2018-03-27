import { Component, OnInit } from '@angular/core';
import {ShintoService} from '../shinto.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:{};
  constructor(private _shintoService:ShintoService) {
    this.transaction=this.getTransaction();
  }

  ngOnInit() {
  }
  getTransaction(){
    return this._shintoService.getCurrentTransaction();
  }

}
