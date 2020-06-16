import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelsdashboard',
  templateUrl: './travelsdashboard.component.html',
  styleUrls: ['./travelsdashboard.component.css']
})
export class TravelsdashboardComponent implements OnInit {

  testname;
  prod;
  uniqueid;
  accstatus;
  constructor(private productservice:ProductService,private router:Router) {
    this.accstatus=localStorage.getItem("accstatus")
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTravels")==null||localStorage.getItem("isTravels")=="null")
    {
      this.router.navigate(['usersdashboard'])
    }
    

    console.log("in")
    this.uniqueid=localStorage.getItem("uniqueid")

    this.productservice.getroutesforid({uniqueid:this.uniqueid}).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
   }

  ngOnInit(): void {
  }
  processdata()
  {
    
    //this.testnamee = document.getElementById('testname')
    //console.log(this.registerform.value)

    this.productservice.genRouteId().subscribe((data)=>{
      console.log(data)
     
      this.router.navigate(['addroute/'+data.routeid])

    })
  
  }

editRoute(id)
{
this.router.navigate(["/editroute/",id])
}

}
