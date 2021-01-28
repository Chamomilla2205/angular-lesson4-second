import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/posts`);
  }
  getPostId(id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/posts/${id}`);
  }
}
