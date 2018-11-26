import { Component, OnInit } from '@angular/core';
import {IPost} from '../post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: IPost[];
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
     this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
