import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipEditorUpdateComponent } from './tip-editor-update.component';

describe('TipEditorUpdateComponent', () => {
  let component: TipEditorUpdateComponent;
  let fixture: ComponentFixture<TipEditorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipEditorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipEditorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
