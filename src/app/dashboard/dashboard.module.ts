import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardModule { }
