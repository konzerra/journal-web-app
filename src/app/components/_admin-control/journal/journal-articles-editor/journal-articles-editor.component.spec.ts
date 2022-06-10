import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalArticlesEditorComponent } from './journal-articles-editor.component';

describe('JournalArticlesEditorComponent', () => {
  let component: JournalArticlesEditorComponent;
  let fixture: ComponentFixture<JournalArticlesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalArticlesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalArticlesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
