import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEditorMainComponent } from './journal-editor-main.component';

describe('JournalEditorMainComponent', () => {
  let component: JournalEditorMainComponent;
  let fixture: ComponentFixture<JournalEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEditorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
