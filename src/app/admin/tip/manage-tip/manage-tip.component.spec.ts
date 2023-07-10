import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTipComponent } from './manage-tip.component';

describe('ManageTipComponent', () => {
  let component: ManageTipComponent;
  let fixture: ComponentFixture<ManageTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
