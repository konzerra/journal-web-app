import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMarkdownComponent } from './save-markdown.component';

describe('SaveMarkdownComponent', () => {
  let component: SaveMarkdownComponent;
  let fixture: ComponentFixture<SaveMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMarkdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
