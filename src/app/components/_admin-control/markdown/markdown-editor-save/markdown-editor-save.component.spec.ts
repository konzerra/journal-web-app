import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditorSaveComponent } from './markdown-editor-save.component';

describe('MarkdownEditorSaveComponent', () => {
  let component: MarkdownEditorSaveComponent;
  let fixture: ComponentFixture<MarkdownEditorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownEditorSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownEditorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
