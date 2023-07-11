import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerUpdateArticlesComponent } from './reviewer-update-articles.component';

describe('ReviewerUpdateArticlesComponent', () => {
  let component: ReviewerUpdateArticlesComponent;
  let fixture: ComponentFixture<ReviewerUpdateArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerUpdateArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerUpdateArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
