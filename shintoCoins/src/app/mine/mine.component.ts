import { Component, OnInit } from '@angular/core';
import { ShintoService} from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  answer:any;
  correctAnswer:any;
  showError:boolean;
  constructor(private _shintoService:ShintoService) {
    // this.transRecord={trans_id:number,action:'',amount:0};
    this.correctAnswer=7;
    this.showError=false;
  }

  ngOnInit() {
  }
  mineShintoCoin(){
    console.log('minging');
    if(this.answer==this.correctAnswer){
      this._shintoService.addTransRecord(1,'mine');
      this.showError=false;
      this.answer='';
    }else{
      this.showError=true;
      this.answer='';
    }
  }

}
