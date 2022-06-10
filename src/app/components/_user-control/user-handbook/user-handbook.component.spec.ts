import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHandbookComponent } from './user-handbook.component';

describe('UserHandbookComponent', () => {
  let component: UserHandbookComponent;
  let fixture: ComponentFixture<UserHandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHandbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
