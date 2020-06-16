import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
prod;
isTravels=false;
  constructor(private productservice :ProductService, private router:Router) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
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
    
    })

   }

  ngOnInit(): void {
  }
  editprofile()
  {
    this.router.navigate(['editprofile'])

  }

}
