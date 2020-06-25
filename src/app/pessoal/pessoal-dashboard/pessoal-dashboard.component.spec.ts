import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalDashboardComponent } from './pessoal-dashboard.component';

describe('PessoalDashboardComponent', () => {
  let component: PessoalDashboardComponent;
  let fixture: ComponentFixture<PessoalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
