import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follower } from '../models/follower';
import { Repositorie } from '../models/repositorie';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http : HttpClient) //instanciation
   { }

  getUsers(){
     return this.http.get('https://api.github.com/users')
  }

  searchUser(query:string){
    return this.http.get(`https://api.github.com/search/users?q=${query}`)  
  }

  getOnlyUser(login:string){
    return this.http.get(`https://api.github.com/users/${login}`)
  }

  getUserRepos(login:string){
    return this.http.get<Repositorie[]>(`https://api.github.com/users/${login}/repos`)
  }

  getUserFollowers(login:string){
    return this.http.get<Follower[]>(`https://api.github.com/users/${login}/followers`)
  }
}
