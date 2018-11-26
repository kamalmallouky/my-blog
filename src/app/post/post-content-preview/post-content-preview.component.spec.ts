import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContentPreviewComponent } from './post-content-preview.component';

describe('PostContentPreviewComponent', () => {
  let component: PostContentPreviewComponent;
  let fixture: ComponentFixture<PostContentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostContentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
