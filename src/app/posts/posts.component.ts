import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
posts:Post[]=[];
constructor(
  private  postService:PostService

){}
ngOninit(){
  this.listaPosts();
}
listaPosts(){
  this.postService.getPosts().suscribe((data)=> {
    this.posts=data;

  });
  
  }

