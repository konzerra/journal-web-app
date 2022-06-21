import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerEditorSaveComponent } from './reviewer-editor-save.component';

describe('ReviewerEditorSaveComponent', () => {
  let component: ReviewerEditorSaveComponent;
  let fixture: ComponentFixture<ReviewerEditorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerEditorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerEditorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
