import { tap, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class CrudService<T> {

  token: any = btoa('admin:coringa');

  constructor(protected http: HttpClient, private API_URL) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + this.token,
      'Access-Control-Allow-Origin': '*'
    })
  };

  listar() {
    console.log('lista');
    return this.http.get<T[]>(this.API_URL, this.httpOptions).pipe(tap(console.log));
  }

  buscaPorId(id) {
    return this.http.get<T>(`${this.API_URL}/${id}`, this.httpOptions).pipe(take(1));
  }

  deletar(id) {
    return this.http.delete(`${this.API_URL}/${id}`, this.httpOptions).pipe(take(1));
  }

  deletarSubElemento(id, objeto: T) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + this.token,
        'Access-Control-Allow-Origin': '*',
      }),
      body: objeto,
    };

    return this.http.delete(`${this.API_URL}/${id}`, options).pipe(take(1));
  }

  adicionarSubElemento(id, objeto: T) {
    return this.http.put(`${this.API_URL}/${id}`, objeto, this.httpOptions).pipe(take(1));
  }

  salvar(objeto: T) {
    // tslint:disable-next-line:no-string-literal
    if (objeto['id']) {
      return this.editar(objeto);
    }
    return this.salvarNovo(objeto);
  }

  private salvarNovo(objeto: T) {
    return this.http.post(this.API_URL, objeto, this.httpOptions).pipe(take(1)); // Só vai 1 vez no servidor
  }

  private editar(objeto: T) {
    // tslint:disable-next-line:no-string-literal
    return this.http.put(`${this.API_URL}/${objeto['id']}`, objeto, this.httpOptions).pipe(take(1));
  }
}
