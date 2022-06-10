import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditorUpdateComponent } from './category-editor-update.component';

describe('CategoryEditorUpdateComponent', () => {
  let component: CategoryEditorUpdateComponent;
  let fixture: ComponentFixture<CategoryEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
