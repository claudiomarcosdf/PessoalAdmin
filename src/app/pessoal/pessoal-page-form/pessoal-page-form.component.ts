import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ConsultaCepService } from './../../shared/services/consulta-cep.service';
import { TiposPessoal } from '../../shared/models/tipos-pessoal';
import { Categoria } from './../../shared/models/categoria';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';
import { Pessoal } from 'src/app/shared/models/pessoal';

@Component({
  selector: 'app-pessoal-page-form',
  templateUrl: './pessoal-page-form.component.html',
  styleUrls: ['./pessoal-page-form.component.css']
})
export class PessoalPageFormComponent implements OnInit {
  formulario: FormGroup;
  quadros: any[];
  patentes: any[];
  generos: any[];
  categorias: any[];

  pessoal: Pessoal;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tiposPessoal: TiposPessoal,
    private categoria: Categoria,
    private policiaisService: PoliciaisService,
    public http: HttpClient,
    private location: Location,
    private cepService: ConsultaCepService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute // Contem os parâmetros da rota
  ) {}

  ngOnInit() {
    // Outra forma de fazer
/*     this.route.params.subscribe(
      ( params: any ) => {
        const id = params['id'];
        const pessoal$ = this.policiaisService.buscaPorId(id);
        pessoal$.subscribe(pessoal => { this.updateForm(pessoal) });
      }
    ); */

    this.pessoal = new Pessoal();

    const idRota = this.route.snapshot.params.id;
    if (idRota) {
      this.route.params.pipe(
        // tslint:disable-next-line:no-string-literal
        map(( params: any ) => params['id']),
        switchMap(id => this.policiaisService.buscaPorId(id))
      ).subscribe(pessoal => this.updateForm(pessoal));

    }

    this.quadros = this.tiposPessoal.getQuadros();
    this.patentes = this.tiposPessoal.getPatente();
    this.generos = this.tiposPessoal.getGenero();
    this.categorias = this.categoria.getCategorias();

    this.formulario = this.formBuilder.group({
      id: [null],
      matricula: [null, [Validators.required, Validators.maxLength(10)]],
      nomeGuerra: [null, [Validators.required, Validators.maxLength(30)]],
      quadro: [null, Validators.required],
      postoGraduacao: [null, Validators.required],
      dataIngresso: [null],
      siape: [null],
      bienalValidade: [null],
      tafData: [null],
      genero: ['M'],
      dataNascimento: [null],
      nome: [null, Validators.maxLength(250)],
      cpf: [null],
      endereco: this.formBuilder.group({
        cep: [null],
        endereco: [null, Validators.maxLength(250)],
        numero: [null, Validators.maxLength(10)],
        complemento: [null, Validators.maxLength(250)],
        telefone: [null, Validators.maxLength(20)],
        celular: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(20)]],
        email: [null, Validators.email]
      }),
      cnhValidade: [null],
      categoria: [null],
      transferido: [null],
      afastamentos: [[]],
      licencas: [[]],
      cursos: [[]]
    });
  }

  updateForm(pessoal) {
    this.formulario.patchValue({
      id: pessoal.id,
      matricula: pessoal.matricula,
      nomeGuerra: pessoal.nomeGuerra,
      quadro: pessoal.quadro,
      postoGraduacao: pessoal.postoGraduacao,
      dataIngresso: pessoal.dataIngresso,
      siape: pessoal.siape,
      bienalValidade: pessoal.bienalValidade,
      tafData: pessoal.tafData,
      genero: pessoal.genero,
      dataNascimento: pessoal.dataNascimento,
      nome: pessoal.nome,
      cpf: pessoal.cpf,
      endereco: {
        cep: pessoal.endereco.cep,
        endereco: pessoal.endereco.endereco,
        numero: pessoal.endereco.numero,
        complemento: pessoal.endereco.complemento,
        telefone: pessoal.endereco.telefone,
        celular: pessoal.endereco.celular,
        email: pessoal.email
      },
      cnhValidade: pessoal.cnhValidade,
      categoria: pessoal.categoria,
      transferido: pessoal.transferido,
      afastamentos: pessoal.afastamentos,
      licencas: pessoal.licencas,
      cursos: pessoal.cursos
    });
  }

  onSubmit() {
    this.snackBar.open('Salvando dados...');

    this.pessoal = this.formulario.value;

    let msgSucesso = 'Policial cadastrado com sucesso!';
    let msgError = 'Erro ao cadastrar policial, tente novamente.';
    if (this.pessoal.id) {
      msgSucesso = 'Cadastro do policial atualizado com sucesso!';
      msgError = 'Erro ao atualizar cadastro do policial, tente novamente.';
    }

    this.policiaisService.salvar(this.pessoal).subscribe(
      success => {
        this.snackBar.open(msgSucesso, 'Fechar', {
          duration: 6000
        });
        this.location.back();
      },
      error => {
        this.snackBar.open(msgError, 'Fechar', {
          duration: 2000
        });
        console.error(error);
      },
      () => console.log('request completo')
    );
  }

  onCancel() {
    this.formulario.reset();
    this.router.navigate(['/pessoal-page-list']);
  }

  consultaCEP() {
    // tslint:disable-next-line:prefer-const
    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService
        .consultaCEP(cep)
        .subscribe(dados => this.populaDadosCep(dados));
    }
  }

  resetaDadosCep() {
    this.formulario.patchValue({
      endereco: [null],
      numero: [null],
      complemento: [null]
    });
  }

  populaDadosCep(dados) {
    this.formulario.patchValue({
      endereco: {
        endereco: dados.logradouro + ' ' + dados.bairro,
        complemento: dados.complemento + ' ' + dados.localidade
      }
    });
  }
}
