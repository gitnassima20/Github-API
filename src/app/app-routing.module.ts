import { PostUserComponent } from './post-user/post-user.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path:"",redirectTo :'/github', pathMatch:"full"},
  { path: "blog", component:BlogComponent},
  { path:"blog/:id",component: PostComponent},
  { path: "github",component: GithubComponent},
  { path:"github/:login",component: PostUserComponent},
  { path: "**" ,component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
