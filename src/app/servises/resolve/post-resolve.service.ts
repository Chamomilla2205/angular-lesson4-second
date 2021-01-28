import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {Resolve} from '@angular/router';
import {Post} from '../../Models/Post';
import {Observable} from 'rxjs';
import {PostService} from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPosts();
  }
}
