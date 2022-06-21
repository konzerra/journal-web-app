import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerEditorMainComponent } from './reviewer-editor-main.component';

describe('ReviewerEditorMainComponent', () => {
  let component: ReviewerEditorMainComponent;
  let fixture: ComponentFixture<ReviewerEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerEditorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
