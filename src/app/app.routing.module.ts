import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {postsRoutes} from './post/post.routes';
import {homeRoutes} from './home/home.routes';

const routes: Routes = [
  {
    path: '',
    children: [...postsRoutes, ...homeRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
