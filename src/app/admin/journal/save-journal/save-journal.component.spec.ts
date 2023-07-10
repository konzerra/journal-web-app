import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJournalComponent } from './save-journal.component';

describe('SaveJournalComponent', () => {
  let component: SaveJournalComponent;
  let fixture: ComponentFixture<SaveJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
