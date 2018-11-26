import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post-detail/post.component';
import { MarkdownModule } from 'ngx-markdown';
import {PostService} from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostNewComponent } from './post-new/post-new.component';
import { PostContentPreviewComponent } from './post-content-preview/post-content-preview.component';
import { AuthentificationModule } from '../authentification/authentification.module';



@NgModule({
  imports: [
    CommonModule, MarkdownModule.forRoot(), FormsModule, HttpClientModule, NgbModalModule, ReactiveFormsModule, LMarkdownEditorModule, AuthentificationModule
  ],
  declarations: [PostsListComponent, PostComponent, PostNewComponent, PostContentPreviewComponent],
  providers: [PostService],
  entryComponents: [PostContentPreviewComponent]
})
export class PostModule { }
