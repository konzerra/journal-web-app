import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorUpdateComponent } from './article-editor-update.component';

describe('ArticleEditorUpdateComponent', () => {
  let component: ArticleEditorUpdateComponent;
  let fixture: ComponentFixture<ArticleEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
