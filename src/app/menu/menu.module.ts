import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { MatListModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [ MenuComponent ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
