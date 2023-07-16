import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePriceComponent } from './save-price.component';

describe('SavePriceComponent', () => {
  let component: SavePriceComponent;
  let fixture: ComponentFixture<SavePriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavePriceComponent]
    });
    fixture = TestBed.createComponent(SavePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
