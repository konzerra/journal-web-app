import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipEditorSaveComponent } from './tip-editor-save.component';

describe('TipEditorSaveComponent', () => {
  let component: TipEditorSaveComponent;
  let fixture: ComponentFixture<TipEditorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipEditorSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipEditorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
