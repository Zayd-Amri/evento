import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [
  {component:HomeComponent,path:''},

  {
    component:AddEventComponent,path:'add'},
   { component:UpdateEventComponent,path:'update/:id'},
    {component:ListComponent,path:'list'},
    {component:RegisterComponent,path:'register'},
    {component:LoginComponent,path:'login'},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
