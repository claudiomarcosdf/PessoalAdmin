import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalPageFormComponent } from './pessoal-page-form.component';

describe('PessoalPageComponent', () => {
  let component: PessoalPageFormComponent;
  let fixture: ComponentFixture<PessoalPageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalPageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
