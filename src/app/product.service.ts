import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  loginUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/loginuser",data)
  }
  registerUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/registeruser",data)
  }
  genRouteId():Observable<any>
  {
    console.log()
    return this.http.get("https://busappnode.herokuapp.com/genRouteId")
  }
  addbus(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/addbus",data)
  }
  getbusforid(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/getbusforid",data)
  }
  addroute(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/addroute",data)
  }
  getroutesforid(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/getroutesforid",data)
  }
  editRoute(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/editroute",data)
  }
  getallavailroutes():Observable<any>
  {
    return this.http.get("https://busappnode.herokuapp.com/getallavialroutes")
  }
  confirmticket(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/addticket",data)
  }
  gettickets(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/gettickets",data)
  }
  cancelticket(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/cancelticket",data)
  }
  updateseatcount(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/updateseatcount",data)
  }
  getuserprofileinfo(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/getuserprofileinfo",data)
  }
  editprofile(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/editprofile",data)
  }
}
