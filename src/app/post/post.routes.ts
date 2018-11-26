import { Routes } from '@angular/router';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostComponent} from './post-detail/post.component';
import {PostNewComponent} from './post-new/post-new.component';
import { AuthGuardService as AuthGuard } from '../authentification/auth-guard.service';

export const postsRoutes: Routes = [{path: 'posts', children: [{ path: '', component: PostsListComponent},
  { path: 'new', component: PostNewComponent}, { path: ':postId', component: PostComponent}]}];


