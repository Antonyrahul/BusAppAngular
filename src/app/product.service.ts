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
    return this.http.post("http://localhost:4123/loginuser",data)
  }
  registerUser(data):Observable<any>{
    console.log(data)
    return this.http.post("http://localhost:4123/registeruser",data)
  }
  genRouteId():Observable<any>
  {
    console.log()
    return this.http.get("http://localhost:4123/genRouteId")
  }
  addbus(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/addbus",data)
  }
  getbusforid(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/getbusforid",data)
  }
  addroute(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/addroute",data)
  }
  getroutesforid(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/getroutesforid",data)
  }
  editRoute(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/editroute",data)
  }
  getallavailroutes():Observable<any>
  {
    return this.http.get("http://localhost:4123/getallavialroutes")
  }
  confirmticket(data):Observable<any>
  {
    return this.http.post("http://localhost:4123/addticket",data)
  }
  gettickets(data):Observable<any>
  {
    return this.http.post("http://localhost:4123/gettickets",data)
  }
  cancelticket(data):Observable<any>
  {
    return this.http.post("http://localhost:4123/cancelticket",data)
  }
  updateseatcount(data):Observable<any>
  {
    return this.http.post("http://localhost:4123/updateseatcount",data)
  }
}
