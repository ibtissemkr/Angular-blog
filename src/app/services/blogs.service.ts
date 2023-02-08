import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import {  map  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:5000/api/";
  create(blog: any){
    return this.http.post(this.url +"add-blog", blog).pipe(
      map((response:any) => response as any)
    );
  }


  getall(){
    return this.http.get(this.url + "all").pipe(
      map((response:any) => response as any)
    );
  }
  getblogbyid(id:any){
    return this.http.get(this.url+ 'blog/'+ id ).
    pipe(
      map((response:any) => response as any)
    );
  }
}
