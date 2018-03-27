import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MineComponent} from './mine/mine.component';
import {SellComponent} from './sell/sell.component';
import {BuyComponent} from './buy/buy.component';
import {LedgerComponent} from './ledger/ledger.component';
import {TransactionComponent} from './transaction/transaction.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mine',component:MineComponent},
  {path:'sell',component:SellComponent},
  {path:'buy',component:BuyComponent},
  {path:'ledger',component:LedgerComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'ledger/transaction',redirectTo: '/transaction' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
