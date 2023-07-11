import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerManageArticlesComponent } from './reviewer-manage-articles.component';

describe('ReviewerManageArticlesComponent', () => {
  let component: ReviewerManageArticlesComponent;
  let fixture: ComponentFixture<ReviewerManageArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerManageArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerManageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
