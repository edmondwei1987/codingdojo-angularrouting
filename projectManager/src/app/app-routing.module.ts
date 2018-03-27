import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list',component:ListComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'new',component:NewComponent},  
  {path:'',pathMatch:'full',redirectTo:'home'}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
