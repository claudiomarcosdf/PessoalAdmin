import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriasabonoPageDialogComponent } from './feriasabono-page-dialog.component';

describe('FeriasabonoPageDialogComponent', () => {
  let component: FeriasabonoPageDialogComponent;
  let fixture: ComponentFixture<FeriasabonoPageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriasabonoPageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriasabonoPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
