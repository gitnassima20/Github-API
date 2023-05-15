import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }
   

  baseUrl : string = 'http://localhost:3000/articles';

  getArticles() {
    return this.http.get<Article[]>(this.baseUrl);
  }

  persistArticle(data:Article){
    return this.http.post<Article[]>(this.baseUrl,data);
  }

  getOnlyArticle(id:number){
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }
  
  putArticle(id:number | undefined, data:Article){
    return this.http.put<Article>(`${this.baseUrl}/${id}`,data);
  }

  deleteArticle(id:number | undefined){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
