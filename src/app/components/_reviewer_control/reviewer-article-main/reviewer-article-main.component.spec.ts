import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerArticleMainComponent } from './reviewer-article-main.component';

describe('ReviewerArticleMainComponent', () => {
  let component: ReviewerArticleMainComponent;
  let fixture: ComponentFixture<ReviewerArticleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerArticleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerArticleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
