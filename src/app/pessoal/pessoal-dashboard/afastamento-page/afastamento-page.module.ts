import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatTooltipModule, MatSortModule, MatPaginatorModule, MatTableModule,
         MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatFormFieldModule,
         MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';

import { AfastamentoPageDialogComponent } from './afastamento-page-dialog/afastamento-page-dialog.component';
import { AfastamentoPageComponent } from './afastamento-page.component';
import { TiposAfastamento } from 'src/app/shared/models/tipos-afastamento';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';


@NgModule({
  declarations: [ AfastamentoPageComponent, AfastamentoPageDialogComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [ TiposAfastamento, PoliciaisService ],
  entryComponents: [ AfastamentoPageDialogComponent ],
  exports: [ AfastamentoPageComponent  ]
})
export class AfastamentoPageModule { }
