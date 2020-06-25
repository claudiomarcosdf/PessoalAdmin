import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoal } from '../models/pessoal';
import { CrudService } from './crud-service';


@Injectable({
  providedIn: 'root'
})
export class PoliciaisService extends CrudService<Pessoal> {

//  private readonly API = environment.API + '/policiais';     `${environment.API}/policiais`

  constructor(protected http: HttpClient) {
        super(http, `${environment.API}/pessoal`); // esse que é o construtor do CRUD MongoDB
/*         super(http, `${environment.API}/policiais`); // esse que é o construtor do CRUD do banco DBJson */
  }

}
