import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditorUpdateComponent } from './markdown-editor-update.component';

describe('MarkdownEditorUpdateComponent', () => {
  let component: MarkdownEditorUpdateComponent;
  let fixture: ComponentFixture<MarkdownEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownEditorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
