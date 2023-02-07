import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoverComponent } from './home/cover/cover.component';
import { BlogListComponent } from './home/blog-list/blog-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    HeaderComponent,
    FooterComponent,
    CreateBlogComponent,
    DetailblogComponent,
    NotFoundComponent,
    CoverComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
