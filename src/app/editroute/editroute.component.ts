import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from'@angular/forms';

@Component({
  selector: 'app-editroute',
  templateUrl: './editroute.component.html',
  styleUrls: ['./editroute.component.css']
})
export class EditrouteComponent implements OnInit {
routeform;
routeid ;
routedetails;
prod;
uniqueid;
isloaded=false;
accstatus;
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
    this.uniqueid = localStorage.getItem("uniqueid")
    this.productservice.getbusforid({uniqueid:this.uniqueid}).subscribe((data)=>{
    console.log(data.data)
    this.prod = data.data
   
    this.routeid= this.activatedroute.snapshot.params.id
    this.productservice.getroutesforid({routeid:this.routeid}).subscribe((data)=>{
      console.log(data.data[0])
      this.routedetails= data.data[0]
      console.log(this.routedetails.from)
      if(this.routedetails.bookedseats>0)
      {
        alert("bookings have already been done")
        this.router.navigate(['travelsdashboard'])
      }
      this.isloaded= true
    this.routeform = new FormGroup({
    
     end : new FormControl(this.routedetails.end,Validators.required),
     
     depdate : new FormControl(this.routedetails.depdate,Validators.required),
     deptime : new FormControl(this.routedetails.deptime,Validators.required),
     duration : new FormControl(this.routedetails.duration,Validators.required),
     busbrand:new FormControl(this.routedetails.busbrand,Validators.required),
     busmodel:new FormControl(this.routedetails.busmodel,Validators.required),
     totalseats:new FormControl(this.routedetails.totalseats,Validators.required),
     blockedseats:new FormControl(this.routedetails.blockedseats,Validators.required),
     travelduration:new FormControl(this.routedetails.travelduration,Validators.required),
     busnumber:new FormControl(this.routedetails.busnumber,Validators.required),
     price:new FormControl(this.routedetails.price,Validators.required),
     aircondition:new FormControl(this.routedetails.aircondition),
     sleeper:new FormControl(this.routedetails.sleeper),
     snack:new FormControl(this.routedetails.snack),
     fast:new FormControl(this.routedetails.fast),
     start:new FormControl(this.routedetails.start,Validators.required),
    
     
     
 
  })
  })
    
})
    
    
   }

  ngOnInit():void {

      
      
   
 
 
  }

  processdata()
  {
    console.log("in")
    
    
    this.routeform.value.name = localStorage.getItem("name")
   this.routeform.value.uniqueid=this.uniqueid
    this.routeform.value.bookedseats = this.routedetails.bookedseats
    this.routeform.value.routeid = this.activatedroute.snapshot.params.id
    console.log(this.routeform.value)
    this.productservice.editRoute(this.routeform.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['travelsdashboard'])
      
    })
  }
  

}
