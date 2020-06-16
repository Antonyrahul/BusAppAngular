import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
prod;
result;
currenttab;
accstatus;
  constructor(private productservice :ProductService, private router:Router) {
    this.accstatus=localStorage.getItem("accstatus")
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTravels")=="true")
    {
      this.router.navigate(['travelsdashboard'])
    }
    var currentdate= formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(currentdate)
    //console.log(this.prod[0].depdate)

    console.log("in")
    this.productservice.gettickets({uniqueid:localStorage.getItem("uniqueid")}).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
      console.log(currentdate)
    console.log(this.prod[0].depdate)
    var d1 = Date.parse(currentdate);
    console.log(currentdate)
var d2 = Date.parse(this.prod[0].depdate);
    console.log(d2-d1)
    this.getUpcomingJourney();
    
  })
   }

  ngOnInit(): void {
  }
  getUpcomingJourney()
  {
    this.currenttab="upcoming"
    this.result= this.prod.filter((item)=>
      {
        var currentdate= formatDate(new Date(), 'yyyy-MM-dd', 'en');
        console.log(currentdate)
        console.log(Date.parse(currentdate))
        console.log(item.depdate)
        console.log(Date.parse(item.depdate))
        return Date.parse(item.depdate)>= Date.parse(currentdate)&&item.ticketstatus!="cancelled"
      })
      console.log(this.result)

  }
  getCompletedJourney()
  {
    this.currenttab="completed"
    this.result= this.prod.filter((item)=>
    {
      var currentdate= formatDate(new Date(), 'yyyy-MM-dd', 'en');
      console.log(currentdate)
      console.log(item.depdate)
      return Date.parse(item.depdate)< Date.parse(currentdate)&&item.ticketstatus!="cancelled"
    })
    console.log(this.result)

  }
  getCancelledTickets()
  {
    this.currenttab="cancelled"
    this.result= this.prod.filter((item)=>
    {
      
      return item.ticketstatus=="cancelled"
    })
    console.log(this.result)

  }
  cancelticket(routeid,depdate,deptime)
  {
    var canbecancelled =this.checkcanceltime(depdate,deptime);
    if(canbecancelled==true){
    var cancelconfirm =confirm("are you sure you want to cancel?")
    if(cancelconfirm==true)
    {
      var cancelparams=
      {
        uniqueid:localStorage.getItem("uniqueid"),
        routeid:routeid
      }
      this.productservice.cancelticket(cancelparams).subscribe((data)=>{
          console.log(data)
      })

    }
  }
  }

  checkcanceltime(depdate,deptime)
  {
    console.log("in")
    var currentdate= formatDate(new Date(), 'yyyy-MM-dd', 'en');
    var currentdateinstr = Date.parse(currentdate)
    if(currentdateinstr!=Date.parse(depdate))
    return true;
    else
    {
      var today = new Date();
      var hours = today.getHours()
      var minutes =  today.getMinutes() 
      
      console.log(deptime)
     var b =deptime.split(":")
     if(b[0]-hours>5)
     return true
     else if(b[0]-hours==5)
     {
       if(b[1]>minutes)
       return true

     }


    }
    return false;

  }

}
