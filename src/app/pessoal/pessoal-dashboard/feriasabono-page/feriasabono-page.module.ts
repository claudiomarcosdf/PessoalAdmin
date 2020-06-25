import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeriasabonoPageComponent } from './feriasabono-page.component';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';
import { MatSnackBarModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTooltipModule,
         MatSortModule, MatPaginatorModule, MatTableModule, MatListModule, MatIconModule, MatButtonModule,
         MatDialogModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FeriasabonoPageDialogComponent } from './feriasabono-page-dialog/feriasabono-page-dialog.component';



@NgModule({
  declarations: [ FeriasabonoPageComponent, FeriasabonoPageDialogComponent ],
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
  providers: [ PoliciaisService ],
  entryComponents: [ FeriasabonoPageDialogComponent ],
  exports: [ FeriasabonoPageComponent ]
})
export class FeriasabonoPageModule { }
