import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsComponent } from '../posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:8080/api/posts';
  constructor(private http: HttpClient) { }
  //listar las categoria
getPosts(): Observable < Post[] > {
  return this.http.get<PostsComponent[]>(this.apiUrl);
}

getPostsaById(id: number): Observable < Post> {
  return this.http.get<Post>(`${this.apiUrl}/${id}`);
}

createPosts (post: Post): Observable < Post > {
  return this.http.post<Post>(this.apiUrl, post);
}

deletePosts(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
updateCategoria(categoria: Post, id: number): Observable < Categoria > {
  return this.http.put<Categoria>(`${this.apiUrl}/${id}`, categoria);
}
}
