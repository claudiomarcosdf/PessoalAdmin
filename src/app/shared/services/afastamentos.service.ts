import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { CrudService } from './crud-service';
import { Afastamento } from '../models/afastamento';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AfastamentosService extends CrudService<Afastamento> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/pessoal/afastamento`);
  }

  // Busca todos os afastamentos do policial - NA API DEVO USAR ALGO PARECIDO PARA BUSCAR POR DESCRICAO DO AFASTAMENTO
  buscaPorIdPolicial(idPolicial, motivo) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Afastamento[]>(`${environment.API}/afastamento?policial.id=
                              ${idPolicial}&policial.afastamento.motivo=${motivo}`).pipe(tap(console.log));
  }
}
