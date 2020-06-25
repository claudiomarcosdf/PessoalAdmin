import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriasabonoPageComponent } from './feriasabono-page.component';

describe('FeriasabonoPageComponent', () => {
  let component: FeriasabonoPageComponent;
  let fixture: ComponentFixture<FeriasabonoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriasabonoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriasabonoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
