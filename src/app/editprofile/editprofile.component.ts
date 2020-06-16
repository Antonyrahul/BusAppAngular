import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  editform;
  prod;
  isTravels=false;
  constructor(private productservice:ProductService,private router:Router) {
    if(localStorage.getItem("isTravels")=="true")
    {
      this.isTravels=true
    }
    var userdata=
    {
      email:localStorage.getItem("email"),
      uniqueid:localStorage.getItem("uniqueid"),
      isTravels:this.isTravels
    }

    this.productservice.getuserprofileinfo(userdata).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
      this.editform = new FormGroup({
        name : new FormControl(this.prod.name,Validators.required),
        email:new FormControl(this.prod.email,[Validators.required,Validators.email]),
        phone:new FormControl(this.prod.phone,Validators.required),
       
     })
    
    })
   
  }

  ngOnInit(): void {
  }
  processdata()
  {  
    if(this.editform.valid)
    {
  this.editform.value.uniqueid=localStorage.getItem("uniqueid")
  this.editform.value.isTravels = this.isTravels
    this.productservice.editprofile(this.editform.value).subscribe((data)=>{
      console.log(data)
      
    this.router.navigate(['profile'])
    })
  }
  }

}
