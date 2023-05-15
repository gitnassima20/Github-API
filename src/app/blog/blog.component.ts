import { ArticlesService } from './../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  articles : Article[] =[]

  constructor(private articleService : ArticlesService) {}

  ngOnInit():void {

    this.articleService.getArticles().subscribe((response) => {
      console.log(response)
      this.articles= response;
    });

  }

  list : boolean = true
  
  //Mode List/Grid
  changeMode(state:boolean){
    this.list = state
  }
  
  myArticle :Article = {
    title:"",
    content:""
  }

 //Clear fields
  initArticle(){
    this.myArticle={
      title:"",
      content:""
    }
  }
   //drive form
  /*saveArticle(form : any){

    if (form.inavlid){
      alert("Please verify the field");
      return;
    }
    
    let {title,content}=form.value
    console.log(form)
    this.articleService.persistArticle({title,content}).subscribe((response :any) => {
      this.articles = [response,...this.articles]
      this.initArticle()
    });
  }*/
  
  editable : boolean = false


  editArticle(data:Article){
   this.myArticle = data
   this.editable = true
  
   }


   updateArticle(){
    let {id, title, content} = this.myArticle


    this.articleService.putArticle(id,{title,content}).subscribe(response =>
      {
        //this.editable = false
        this.initArticle()
      })
   }

  destroyArticle(id:number | undefined){
    if(!confirm('Do want to delete this.article?')){
      return
    }

    this.articleService.deleteArticle(id).subscribe(response => {
      this.articles = this.articles.filter(article => article.id!== id)
    })
  }
   
  
  log(myTitle: any){
    console.log(myTitle);
  }
  //Reactive form
  articleForm = new FormGroup({
    title : new UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[0-9a-zA-Z]*')]),
    content : new UntypedFormControl('',Validators.required),
  })

  saveArticle(){
    console.log(this.articleForm.value);
    if (this.articleForm.invalid){
      alert("Please verify the fields");
      return;
    }
    
    let {title,content}=this.articleForm.value
    this.articleService.persistArticle({title,content}).subscribe((response :any) => {
      this.articles = [response,...this.articles]
      this.initArticle()
    });
    
   
}
  
  

}
