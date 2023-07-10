import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReviewerComponent } from './manage-reviewer.component';

describe('ManageReviewerComponent', () => {
  let component: ManageReviewerComponent;
  let fixture: ComponentFixture<ManageReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageReviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
