import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Components/add-blog/add-blog.component';
import { HomeComponent } from './Components/home/home.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'add-blog', component: AddBlogComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }