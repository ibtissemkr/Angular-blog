import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path:'home', redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent  },
  { path: 'blog/:id', component: DetailblogComponent },
  { path: 'addblog', component: CreateBlogComponent },
  {path:'**', component: NotFoundComponent} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }