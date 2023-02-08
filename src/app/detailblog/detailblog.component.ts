import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit{
  id : any;
  blog: any;
  serverUrl:string="http://localhost:5000/";

  constructor(private act:ActivatedRoute,private data : BlogsService){}

  ngOnInit(): void {
    this.id= this.act.snapshot.paramMap.get('id');


    this.data.getblogbyid(this.id)
    .subscribe(
      res=>{
        console.log('res getbyid' , res)
        this.blog=res['data'];
        
      },
      err=>{
        console.log(err);
      }
      
    )
      
  }

}
