import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditorMainComponent } from './category-editor-main.component';

describe('CategoryEditorMainComponent', () => {
  let component: CategoryEditorMainComponent;
  let fixture: ComponentFixture<CategoryEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
