import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from'@angular/forms';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
routedetails;
routeid;
isloaded;
routeform;
availableseats;
accstatus;
  constructor(private productservice:ProductService,private router:Router,private activatedroute:ActivatedRoute) {
    this.accstatus=localStorage.getItem("accstatus")
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTravels")=="true")
    {
      this.router.navigate(['travelsdashboard'])
    }
    this.routeid= this.activatedroute.snapshot.params.id
    this.productservice.getroutesforid({routeid:this.routeid}).subscribe((data)=>{
      console.log(data.data[0])
      this.routedetails= data.data[0]
      console.log(this.routedetails.from)
 this.availableseats = this.routedetails.totalseats-(this.routedetails.bookedseats+this.routedetails.blockedseats)
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
     bookedseats:new FormControl(this.routedetails.bookedseats,Validators.required),
     start:new FormControl(this.routedetails.start,Validators.required),
    
     
     
 
  })
  })
   }

  ngOnInit(): void {
  }
  processdata(numberoftickets)
  {
    console.log("in")
    console.log(numberoftickets)
    var totalprice = numberoftickets*this.routeform.value.price;
    console.log(totalprice)
    this.routeform.value.totaltickets= numberoftickets;
    this.routeform.value.totalprice = totalprice;
    this.routeform.value.routeid= this.routeid;
    this.routeform.value.uniqueid = localStorage.getItem("uniqueid")
    if(numberoftickets>10||numberoftickets>this.availableseats)
    alert("The seat quantity is not available. Try reducing number and try again")
    else{
      
      this.productservice.confirmticket(this.routeform.value).subscribe((data)=>{
        console.log(data)
      });
var userdata = 
{
  bookedseats:numberoftickets,
  routeid:this.routeid

}
      this.productservice.updateseatcount(userdata).subscribe((data)=>{
        console.log(data)
      });

    }
    this.router.navigate(['usersdashboard'])
  }

}
