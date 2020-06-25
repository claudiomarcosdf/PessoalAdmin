import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { stringify } from 'querystring';
import { match } from 'minimatch';

import { Pessoal } from './../../shared/models/pessoal';
import { PoliciaisService } from './../../shared/services/policiais.service';
import { MascarasFormater } from 'src/app/shared/directives/mascaras-formater';


@Component({
  selector: 'app-pessoal-dashboard',
  templateUrl: './pessoal-dashboard.component.html',
  styleUrls: ['./pessoal-dashboard.component.css']
})
export class PessoalDashboardComponent implements OnInit {

  pessoal: Pessoal;
  identificacao: string;
  tempoServicoFull: string;
  tempoServico: any;
  contatos: string;

  constructor(private route: ActivatedRoute, private policialService: PoliciaisService,
              private mascara: MascarasFormater) { }

  ngOnInit() {
    this.route.params.pipe(
      // tslint:disable-next-line:no-string-literal
      map( (params: any) => params['id']),
      switchMap(id => this.policialService.buscaPorId(id))
    ).subscribe( dados => {
      this.exibeDadosGerais(dados);
      }
    );
  }

  exibeDadosGerais(dados) {
    // para renderizar na tela se não houver valor no retorno utilizar operador elvis: {{ pessoa?.nome }}
    this.pessoal = dados;

    const dataIngresso: Date = this.pessoal.dataIngresso;

    this.calculaTempoServico(dataIngresso);

    this.identificacao = this.pessoal.postoGraduacao + ' ' + this.pessoal.quadro +
                          ' ' + this.pessoal.nomeGuerra + ' - ' + this.mascara.formataMatricula(this.pessoal.matricula);
    this.contatos = 'Contatos: ' + this.mascara.formataTelefone(this.pessoal.endereco.celular) + ' ' +
                    (this.pessoal.endereco.email == null ? '' : ' - ' + this.pessoal.endereco.email);
    this.tempoServicoFull = 'Ingresso: ' + formatDate(this.pessoal.dataIngresso, 'dd/MM/yyyy', 'en-US')
                             + ' - Tempo efetivo: ' + this.tempoServico;
  }

  calculaTempoServico(dataIngresso: Date) {
    const timeAtual = new Date().getTime();
    const timeIngresso = new Date(dataIngresso).getTime();

    const diff = Math.floor(timeAtual - timeIngresso);
    const dia = 1000 * 60 * 60 * 24;

    const dias = Math.floor(diff / dia);
    const meses = Math.floor(dias / 31);
    const anos = Math.floor(meses / 12);

    this.tempoServico = anos + ' ano(s)';
  }

/* formataMatricula(matricula: number)  {
     const strMat: string = matricula.toString();

     return [strMat.slice(0, strMat.length - 1), '/', strMat.slice(strMat.length - 1)].join('');
  }

} */

}
