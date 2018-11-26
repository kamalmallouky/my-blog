import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {IPost} from './post.model';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get(environment.postsApiUrl + '/posts').pipe( map((posts: IPost[]) => posts));
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get(environment.postsApiUrl + '/posts/' + id).pipe(map((post: IPost) => post));
  }

  savePost(post: IPost): Observable<any> {
    return this.http.post(environment.postsApiUrl + '/posts/new', post);
  }
}
