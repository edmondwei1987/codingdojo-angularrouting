import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanjoseComponent} from './sanjose/sanjose.component';
import { SeattleComponent} from './seattle/seattle.component';
import { BurbankComponent} from './burbank/burbank.component';
import { WashingtonComponent} from './washington/washington.component';
import { ChicagoComponent} from './chicago/chicago.component';
import { DallasComponent} from './dallas/dallas.component';

const routes: Routes = [
  {path:'sanjose',component:SanjoseComponent},
  {path:'seattle',component:SeattleComponent},
  {path:'burbank',component:BurbankComponent},
  {path:'dc',component:WashingtonComponent},
  {path:'dallas',component:DallasComponent},
  {path:'chicago',component:ChicagoComponent},
  {path:'',pathMatch:'full',redirectTo:'/burbank'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
