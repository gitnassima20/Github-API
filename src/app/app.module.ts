import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostUserComponent } from './post-user/post-user.component';
import { ResumePipe } from './pipes/resume.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    CardComponent,
    BlogComponent,
    NavbarComponent,
    PageNotFoundComponent,
    PostComponent,
    PostUserComponent,
    ResumePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
