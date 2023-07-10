import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveReviewerComponent } from './save-reviewer.component';

describe('SaveReviewerComponent', () => {
  let component: SaveReviewerComponent;
  let fixture: ComponentFixture<SaveReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveReviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
