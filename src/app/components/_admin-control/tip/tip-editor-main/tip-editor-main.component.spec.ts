import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipEditorMainComponent } from './tip-editor-main.component';

describe('TipEditorMainComponent', () => {
  let component: TipEditorMainComponent;
  let fixture: ComponentFixture<TipEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipEditorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
