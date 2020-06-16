import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  prod;
  uniqueid = localStorage.getItem("uniqueid")
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
    this.productservice.getbusforid({uniqueid:this.uniqueid}).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
   }

  ngOnInit(): void {
  }
  processdata(busnum)
  {
    
   var busdata=
    {
      busregno:busnum,
      status:"pending",
      uniqueid:this.uniqueid

    }
    this.productservice.addbus(busdata).subscribe((data)=>{
      console.log(data.data)
      
  })
  this.productservice.getbusforid({uniqueid:this.uniqueid}).subscribe((data)=>{
    console.log(data.data)
    this.prod = data.data
})
  }

}
