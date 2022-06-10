import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEditorUpdateComponent } from './journal-editor-update.component';

describe('JournalEditorUpdateComponent', () => {
  let component: JournalEditorUpdateComponent;
  let fixture: ComponentFixture<JournalEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEditorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
