import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditorSaveComponent } from './category-editor-save.component';

describe('CategoryEditorSaveComponent', () => {
  let component: CategoryEditorSaveComponent;
  let fixture: ComponentFixture<CategoryEditorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
