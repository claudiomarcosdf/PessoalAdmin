import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaPageComponent } from './escala-page.component';

describe('EscalaPageComponent', () => {
  let component: EscalaPageComponent;
  let fixture: ComponentFixture<EscalaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
