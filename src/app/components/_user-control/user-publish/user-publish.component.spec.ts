import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublishComponent } from './user-publish.component';

describe('UserPublishComponent', () => {
  let component: UserPublishComponent;
  let fixture: ComponentFixture<UserPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
