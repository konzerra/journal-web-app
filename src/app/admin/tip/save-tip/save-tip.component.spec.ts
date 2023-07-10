import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTipComponent } from './save-tip.component';

describe('SaveTipComponent', () => {
  let component: SaveTipComponent;
  let fixture: ComponentFixture<SaveTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
