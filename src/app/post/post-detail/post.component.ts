import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../post.model';
import {IComment} from '../comment.model';
import * as moment from 'moment';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId: string;
  post: IPost;
  newComment: IComment;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe( params => this.postId = params.postId );
  }

  ngOnInit() {
    this.postService.getPost(this.postId).subscribe( post => this.post = post);
    this.newComment = this.initializeNewComment();
  }

  addNewComment() {
    if (!this.post.comments) {
      this.post.comments = [];
    }
    this.post.comments.push(JSON.parse(JSON.stringify(this.newComment)));
    this.newComment.text = '';
  }

  initializeNewComment() {
      return {
        id: 1,
        text: '',
        date: moment('2018-07-01').toDate(),
        user: {
          username: 'sousou',
          firstname: 'sousou',
          lastname: 'sousou'
        }
      };
  }
}
