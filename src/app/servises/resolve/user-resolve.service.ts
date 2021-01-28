import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../Models/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }
}
