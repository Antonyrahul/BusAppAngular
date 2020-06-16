import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelsdashboardComponent } from './travelsdashboard/travelsdashboard.component';
import { AddrouteComponent } from './addroute/addroute.component';
import { BusComponent } from './bus/bus.component';
import { EditrouteComponent } from './editroute/editroute.component';
import { UsersdashboardComponent } from './usersdashboard/usersdashboard.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { MyticketsComponent } from './mytickets/mytickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    TravelsdashboardComponent,
    AddrouteComponent,
    BusComponent,
    EditrouteComponent,
    UsersdashboardComponent,
    BookticketComponent,
    MyticketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
