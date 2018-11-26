import { Component, OnInit } from '@angular/core';
import { IPost } from '../post.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostContentPreviewComponent } from '../post-content-preview/post-content-preview.component';
import * as moment from 'moment';
import { MarkdownService } from 'ngx-markdown';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  post: IPost;
  parsed: string;
  form: FormGroup;
  submitted = false;
  options: any;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private postService: PostService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.post = this.initializeNewComment();
    this.options = {
      'hideIcons': ['Bold', 'Italic', 'Heading', 'Refrence', 'Link', 'Image', 'Ul',
        'Ol', 'Code', 'TogglePreview', 'FullScreen']  // default is empty, the value is case-sensitive
    };
  }

  preRenderFunc(content: string) {
    // return this.form.get('content').value.replace(/something/g, 'new value'); // must return a string
  }
  preview() {
    const modalRef = this.modalService.open(PostContentPreviewComponent,  { size: 'lg' });
    modalRef.componentInstance.text = this.form.get('content').value;
  }

  onSubmit() {
    // stop here if form is invalid
    this.post.title = this.form.get('title').value;
    this.post.content = this.form.get('content').value;
    this.submitted = true;
    // map form's input values to the post object
    /*if (this.form.invalid) {
      return;
    }*/
    // save the post
    this.postService.savePost(this.post).subscribe(success => {
      alert('success');
    }, err => {
      alert('failure');
    });
  }

  initializeNewComment() {
    return {
      texte: '',
      title: '',
      publicationDate: moment().toDate(),
      content: '',
      user: {
        username: 'sousou',
        firstname: 'sousou',
        lastname: 'sousou'
      }
    };
  }
}
