import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  myArticle: Article={
    title:'',
    content:''
  }
  
  constructor(private route: ActivatedRoute,private articleService : ArticlesService) {}
  ngOnInit():void {
    this.route.params.subscribe((params:any) => this.getOnlyArticle(params.id));

  }
  
  getOnlyArticle(id:number){
    this.articleService.getOnlyArticle(id).subscribe(responce =>
      this.myArticle = responce)
  }
  
  
  }
