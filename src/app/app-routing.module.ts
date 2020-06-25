import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EscalaPageComponent } from './escala/escala-page/escala-page.component';
import { PessoalPageListComponent } from './pessoal/pessoal-page-list/pessoal-page-list.component';
import { PessoalPageFormComponent } from './pessoal/pessoal-page-form/pessoal-page-form.component';
import { PessoalDashboardComponent } from './pessoal/pessoal-dashboard/pessoal-dashboard.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pessoal-page-list', component: PessoalPageListComponent},
  { path: 'pessoal-page-form', component: PessoalPageFormComponent},
  { path: 'pessoal-page-form/:id', component: PessoalPageFormComponent},
  { path: 'pessoal-dashboard/:id', component: PessoalDashboardComponent},
  { path: 'escala-page', component: EscalaPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
