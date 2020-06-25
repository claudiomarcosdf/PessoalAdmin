import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentoPageDialogComponent } from './afastamento-page-dialog.component';

describe('AfastamentoPageDialogComponent', () => {
  let component: AfastamentoPageDialogComponent;
  let fixture: ComponentFixture<AfastamentoPageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfastamentoPageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfastamentoPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
