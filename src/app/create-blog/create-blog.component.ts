import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit{
  blog : any = {
    title:'',
    description:'',
    author:'',


  }
  picture: any;
  select(e:any){
    this.picture = e.target.files[0];
  }
  constructor(private data:BlogsService , private router:Router){}
  ngOnInit(): void {
      
  }
  
  create(){
    let fd = new FormData()
    fd.append('title',this.blog.title)
    fd.append('description',this.blog.description)
    fd.append('author',this.blog.author)
    fd.append('picture',this.picture)

    this.data.create(fd)
    .subscribe(
      res=>{
        this.router.navigate(['/home'])

      },
      err=>{
        console.log(err);
      }

    );

  }

}
