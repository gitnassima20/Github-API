import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  constructor(private githubService : GithubService) {}

  users:any[] = [];

  search : string = ""

  
  getAllUsers(){
    this.githubService.getUsers().subscribe((response : any) => {
      this.users = response;
    })
  }

  ngOnInit() {
    this.getAllUsers();
  }

  destroyUser(data: any){
    this.users =this.users.filter(user => user.id !== data.user.id)

  }

  searchUser(){
      this.githubService.searchUser(this.search).subscribe((response:any) => {
        this.users = response.items;
      })
    }
    
    
  }



