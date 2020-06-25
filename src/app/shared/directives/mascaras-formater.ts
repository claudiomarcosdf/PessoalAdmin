import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascarasFormater {

  constructor() { }

  formataMatricula(matricula: number)  {
    const strMat: string = matricula.toString();

    return [strMat.slice(0, strMat.length - 1), '/', strMat.slice(strMat.length - 1)].join('');
  }

  formataTelefone(telefone: string) {
    const strFone: string = telefone.toString();

    return [strFone.slice(0, strFone.length - 4), '-', strFone.slice(strFone.length - 4)].join('');
  }

}

