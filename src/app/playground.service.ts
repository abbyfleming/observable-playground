import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Post } from './shared/models/playground.model';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  // Mock Responses
  getError(statusCode?: number) {
    if (!statusCode) {
      statusCode = 500;
    }

    return this.http.get(`http://httpstat.us/${statusCode}`);
  }

}
