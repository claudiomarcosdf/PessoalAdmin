import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentoPageComponent } from './afastamento-page.component';

describe('AfastamentoPageComponent', () => {
  let component: AfastamentoPageComponent;
  let fixture: ComponentFixture<AfastamentoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfastamentoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfastamentoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
