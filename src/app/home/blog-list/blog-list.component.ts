import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{
  blogs: any ;
  serverUrl:string="http://localhost:5000/";
  constructor(private data : BlogsService){}
  ngOnInit(): void {
    this.data.getall(

    ). subscribe(
      res=>{
        console.log('res getall' , res)
        this.blogs=res['data'];
      },
      err=>{
        console.log(err);
      }

    );
      
  }

}
