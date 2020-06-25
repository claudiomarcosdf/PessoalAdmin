import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatSlideToggleModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PessoalPageFormComponent } from './pessoal-page-form.component';
import { TiposPessoal } from 'src/app/shared/models/tipos-pessoal';
import { MascaraDirective } from 'src/app/shared/directives/mascara.directive';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';
import { Categoria } from 'src/app/shared/models/categoria';

@NgModule({
  declarations: [
    PessoalPageFormComponent,
    MascaraDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule
  ],
  exports: [ MascaraDirective ],
  providers: [ TiposPessoal, Categoria, PoliciaisService ]
})
export class PessoalPageFormModule { }
