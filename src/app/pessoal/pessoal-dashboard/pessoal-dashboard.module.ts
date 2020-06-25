import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatMenuModule, MatCardModule, MatGridListModule, MatButtonModule,
         MatListModule, MatSortModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';

import { PessoalDashboardComponent } from './pessoal-dashboard.component';
import { AfastamentoPageModule } from './afastamento-page/afastamento-page.module';
import { FeriasabonoPageModule } from './feriasabono-page/feriasabono-page.module';



@NgModule({
  declarations: [ PessoalDashboardComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    AfastamentoPageModule,
    FeriasabonoPageModule
  ]
})
export class PessoalDashboardModule { }
