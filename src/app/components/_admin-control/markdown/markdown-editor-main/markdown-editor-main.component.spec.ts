import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditorMainComponent } from './markdown-editor-main.component';

describe('MarkdownEditorMainComponent', () => {
  let component: MarkdownEditorMainComponent;
  let fixture: ComponentFixture<MarkdownEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownEditorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
