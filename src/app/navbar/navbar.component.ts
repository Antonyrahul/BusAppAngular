import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name;
jwtToken;
isTravels;
  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
    this.isTravels="false"
    this.name = localStorage.getItem("name")
    if(this.name == undefined)
    this.name = "Guest User"
    this.jwtToken = localStorage.getItem("jwtToken")
    this.isTravels= localStorage.getItem("isTravels")
    console.log(this.isTravels)
  }
  logoutuser()
  {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem("isTravels");
    
    this.router.navigate([''])
    location.reload();
    


  }

}
