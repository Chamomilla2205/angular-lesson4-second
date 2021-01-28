import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './Components/users/users.component';
import {UserComponent} from './Components/user/user.component';
import {FullUserComponent} from './Components/full-user/full-user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './servises/resolve/user-resolve.service';
import {PostsComponent} from './Components/posts/posts.component';
import {PostComponent} from './Components/post/post.component';
import {PostResolveService} from './servises/resolve/post-resolve.service';
import { FullPostComponent } from './Components/full-post/full-post.component';
import { MenuComponent } from './Components/menu/menu.component';

const routes: Routes = [{
  path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
  children: [
    {path: ':id', component: FullUserComponent}
  ]
},
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService},
    children: [
      {path: ':id', component: FullPostComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
