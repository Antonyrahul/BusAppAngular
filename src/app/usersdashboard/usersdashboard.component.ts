import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {FormGroup,FormControl, Validators} from'@angular/forms';

@Component({
  selector: 'app-usersdashboard',
  templateUrl: './usersdashboard.component.html',
  styleUrls: ['./usersdashboard.component.css']
})
export class UsersdashboardComponent implements OnInit {
prod;
result;
startlist=[];
endlist=[];
showdiv =false
filtered;
filterform;
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
    this.filterform = new FormGroup({
     
      aircondition:new FormControl(),
      sleeper:new FormControl(),
      snack:new FormControl(),
      fast:new FormControl(),
     
      
      

   })
    
    this.showdiv=false
    console.log("dash")
    this.productservice.getallavailroutes().subscribe((res)=>{
      console.log(res.data)
      this.prod = res.data
      for(var i=0;i<this.prod.length;i++)
      {
        
        if(!this.startlist.includes(this.prod[i].start))
        this.startlist.push(this.prod[i].start)
        if(!this.endlist.includes(this.prod[i].end))
        this.endlist.push(this.prod[i].end)
      }
     
      this.showdiv=true
  })
   
  }

  ngOnInit(): void {
   
  }
  searchbus(start,end)
  {
    console.log(start)
    console.log(end)
    this.result= this.prod.filter((items)=>
    {

      return items.start==start&&items.end==end
    })
    console.log(this.result)
    this.filtered=this.result
  }
  bookticket(routeid)
  {
    this.router.navigate(["/bookticket/",routeid])
  }
  
  applyfilter()
  {
    this.filtered=this.result.filter((items)=>

    {
    console.log(items.aircondition,this.filterform.value.aircondition,items.sleeper,this.filterform.value.sleeper,items.snack,this.filterform.value.snack,items.fast,this.filterform.value.fast)
      
      return items.aircondition==this.filterform.value.aircondition&&items.sleeper==this.filterform.value.sleeper&&items.snack==this.filterform.value.snack&&items.fast==this.filterform.value.fast
    })
    console.log(this.result)
    console.log(this.filtered)
    this.filterform.reset()
  }

}
