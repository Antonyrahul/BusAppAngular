import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from'@angular/forms';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {
  routeform;
  prod;
  accstatus;
  uniqueid = localStorage.getItem("uniqueid")
  constructor(private productservice:ProductService,private router:Router,private activatedroute:ActivatedRoute) { 
    this.accstatus=localStorage.getItem("accstatus")
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTravels")==null||localStorage.getItem("isTravels")=="null")
    {
      this.router.navigate(['usersdashboard'])
    }
    var busdata =
    {
      uniqueid:this.uniqueid,
      status :"approved"

    }
    this.productservice.getbusforid(busdata).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
    })
    

    this.routeform = new FormGroup({
      start : new FormControl('',Validators.required),
      end : new FormControl('',Validators.required),
      depdate : new FormControl('',Validators.required),
      deptime : new FormControl('',Validators.required),
      duration : new FormControl('',Validators.required),
      busbrand:new FormControl('',Validators.required),
      busmodel:new FormControl('',Validators.required),
      totalseats:new FormControl('',Validators.required),
      blockedseats:new FormControl('',Validators.required),
   price:new FormControl('',Validators.required),
      busnumber:new FormControl('',Validators.required),
     
      aircondition:new FormControl(),
      sleeper:new FormControl(),
      snack:new FormControl(),
      fast:new FormControl(),
     
      
      

   })
  }

  ngOnInit(): void {
  }
  processdata()
  {
    console.log("in")
    
    
    this.routeform.value.name = localStorage.getItem("name")
    this.routeform.value.uniqueid=this.uniqueid
    this.routeform.value.bookedseats = 0
    this.routeform.value.routeid = this.activatedroute.snapshot.params.id
    console.log(this.routeform.value)
    this.productservice.addroute(this.routeform.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['travelsdashboard'])
      
    })
  }

}
