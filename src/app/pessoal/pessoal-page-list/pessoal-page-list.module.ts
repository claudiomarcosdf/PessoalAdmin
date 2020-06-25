import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, MatSnackBarModule, MatInputModule, MatCheckboxModule, MatBadgeModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PessoalPageListComponent } from './pessoal-page-list.component';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';


@NgModule({
  declarations: [ PessoalPageListComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  exports: [ PessoalPageListComponent ],
  providers: [ PoliciaisService ]
})
export class PessoalPageListModule { }
