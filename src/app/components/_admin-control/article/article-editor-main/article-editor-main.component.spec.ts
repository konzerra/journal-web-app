import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorMainComponent } from './article-editor-main.component';

describe('ArticleEditorMainComponent', () => {
  let component: ArticleEditorMainComponent;
  let fixture: ComponentFixture<ArticleEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
