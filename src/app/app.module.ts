import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PostModule} from './post/post.module';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app.routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PostModule, HomeModule, AppRoutingModule, MarkdownModule.forRoot(), AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
