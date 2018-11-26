import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-content-preview',
  templateUrl: './post-content-preview.component.html',
  styleUrls: ['./post-content-preview.component.css']
})
export class PostContentPreviewComponent {

  @Input() text;

  constructor(public activeModal: NgbActiveModal) {}

}
