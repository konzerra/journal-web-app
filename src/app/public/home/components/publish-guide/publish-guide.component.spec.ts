import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishGuideComponent } from './publish-guide.component';

describe('PublishGuideComponent', () => {
  let component: PublishGuideComponent;
  let fixture: ComponentFixture<PublishGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
