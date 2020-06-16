import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerform;
  constructor(private productservice:ProductService,private router:Router) {
    this.registerform = new FormGroup({
      name : new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      travels: new FormControl()
   })
  }

  ngOnInit(): void {
    
  }
  processdata()
  {
    if(this.registerform.valid){
    console.log(this.registerform.value)
    if(this.registerform.value.travels ==true)
    {
      this.registerform.value.accstatus ="pending"
    }
    this.productservice.registerUser(this.registerform.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['login'])

    })
  }
  }


}
