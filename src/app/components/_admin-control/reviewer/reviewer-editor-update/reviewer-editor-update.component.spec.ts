import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerEditorUpdateComponent } from './reviewer-editor-update.component';

describe('ReviewrEditorUpdateComponent', () => {
  let component: ReviewerEditorUpdateComponent;
  let fixture: ComponentFixture<ReviewerEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerEditorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
