import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Follower } from '../models/follower';
import { Repositorie } from '../models/repositorie';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  
  user = {
    login:'',
    avatar_url:'',
    followers:'',
    following:'',
    repos_url:'',
    public_repos:'',
    created_at:'',
    updated_at:'',
    location:''
  }

  repos:Repositorie[]=[]
    
  followers:Follower[]=[]
    
  constructor(private route:ActivatedRoute,private githubService :GithubService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:any) =>{ 
      this.getOnlyUser(params.login)
      this.getUserRepos(params.login)
      this.getUserFollowers(params.login)
    });
    
  }
  
  getOnlyUser(login:string){
    this.githubService.getOnlyUser(login).subscribe((responce:any) =>
      this.user = responce)
  }

  getUserRepos(login:string){
    this.githubService.getUserRepos(login).subscribe((responce:any) =>
      this.repos = responce)
  }

  getUserFollowers(login:string){
    this.githubService.getUserFollowers(login).subscribe((responce:any) =>
      this.followers = responce)
  }
  

}
  



