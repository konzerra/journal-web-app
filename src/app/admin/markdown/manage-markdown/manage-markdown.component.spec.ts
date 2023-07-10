import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMarkdownComponent } from './manage-markdown.component';

describe('ManageMarkdownComponent', () => {
  let component: ManageMarkdownComponent;
  let fixture: ComponentFixture<ManageMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMarkdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
