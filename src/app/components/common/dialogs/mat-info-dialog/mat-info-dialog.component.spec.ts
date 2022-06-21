import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInfoDialogComponent } from './mat-info-dialog.component';

describe('MatDialogInfoComponent', () => {
  let component: MatInfoDialogComponent;
  let fixture: ComponentFixture<MatInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
