import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEditorSaveComponent } from './journal-editor-save.component';

describe('JournalEditorSaveComponent', () => {
  let component: JournalEditorSaveComponent;
  let fixture: ComponentFixture<JournalEditorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEditorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
