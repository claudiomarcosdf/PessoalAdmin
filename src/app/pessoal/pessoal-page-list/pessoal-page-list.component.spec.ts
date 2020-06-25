import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { PessoalPageListComponent } from './pessoal-page-list.component';

describe('PessoalPageListComponent', () => {
  let component: PessoalPageListComponent;
  let fixture: ComponentFixture<PessoalPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalPageListComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
