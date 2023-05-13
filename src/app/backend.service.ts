import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  API = "https://api.priorityskillcenter.tech" 

  constructor(private http:HttpClient) { }

  postNewCourse(type:string,body:any){
    return this.http.post(`${this.API}/course/${type}`,body)
  }





}
