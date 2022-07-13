import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerArticleUpdateComponent } from './reviewer-article-update.component';

describe('ReviewerArticleUpdateComponent', () => {
  let component: ReviewerArticleUpdateComponent;
  let fixture: ComponentFixture<ReviewerArticleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerArticleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerArticleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
