import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarkdownComponent } from './update-markdown.component';

describe('UpdateMarkdownComponent', () => {
  let component: UpdateMarkdownComponent;
  let fixture: ComponentFixture<UpdateMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMarkdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
