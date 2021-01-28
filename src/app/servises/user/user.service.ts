import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  getUserId(id): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users/${id}`);
  }
}
