import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {AddrouteComponent} from './addroute/addroute.component'
import {TravelsdashboardComponent} from './travelsdashboard/travelsdashboard.component'
import {BusComponent} from './bus/bus.component'
import {EditrouteComponent} from './editroute/editroute.component'
import {UsersdashboardComponent} from './usersdashboard/usersdashboard.component'
import {BookticketComponent} from './bookticket/bookticket.component'
import {MyticketsComponent} from './mytickets/mytickets.component'


const routes: Routes = [
  {
    path :"login",
    component:LoginComponent
  },
  {
    path :"register",
    component:RegisterComponent
  },
  {
    path:"addroute/:id",
    component:AddrouteComponent
  },
  {
    path:"travelsdashboard",
    component:TravelsdashboardComponent
  },
  {
    path:"garage",
    component:BusComponent
  },
  {
    path:"editroute/:id",
    component:EditrouteComponent
  },
  {
    path:"usersdashboard",
    component:UsersdashboardComponent
  },
  {
    path:"bookticket/:id",
    component:BookticketComponent
  },
  {
    path:"mytickets",
    component:MyticketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
