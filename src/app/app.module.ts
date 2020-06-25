import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { PessoalPageListModule } from './pessoal/pessoal-page-list/pessoal-page-list.module';
import { EscalaPageComponent } from './escala/escala-page/escala-page.component';
import { MenuModule } from './menu/menu.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PessoalPageFormModule } from './pessoal/pessoal-page-form/pessoal-page-form.module';
import { ConfirmationDialogComponent } from './shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { PessoalDashboardModule } from './pessoal/pessoal-dashboard/pessoal-dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    EscalaPageComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    PessoalPageFormModule,
    MenuModule,
    DashboardModule,
    PessoalPageListModule,
    PessoalDashboardModule,
    AppRoutingModule,

  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
