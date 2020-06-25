import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Afastamento } from 'src/app/shared/models/afastamento';
import { AfastamentoPageDialogComponent } from './afastamento-page-dialog/afastamento-page-dialog.component';
import { Pessoal } from 'src/app/shared/models/pessoal';
import { map, switchMap } from 'rxjs/operators';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { AfastamentosService } from 'src/app/shared/services/afastamentos.service';

@Component({
  selector: 'app-afastamento-page',
  templateUrl: './afastamento-page.component.html',
  styleUrls: ['./afastamento-page.component.css']
})
export class AfastamentoPageComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  policial: Pessoal;
  afastamento: Afastamento = {motivo: '', dataInicio: null, dataFim: null};

  afastamentos: Afastamento[] = [];
  idPolicial: any;

  dataSource: MatTableDataSource<Afastamento>;

  displayedColumns = ['motivo', 'dataInicio', 'dataFim', 'actions'];

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute,
              private policiaisService: PoliciaisService, private afastamentosService: AfastamentosService,
              private snackBar: MatSnackBar) {

    this.dataSource = new MatTableDataSource(this.afastamentos);
  }

  ngOnInit() {
  //  this.idPolicial = this.route.snapshot.params.id;
    this.AtualizaDados();
  }

  private AtualizaDados() {

    this.route.params.pipe(
      // tslint:disable-next-line:no-string-literal
      map((params: any) => params['id']),
      switchMap(id => this.policiaisService.buscaPorId(id))
      ).subscribe(policial => {
        this.policial = policial;
        this.listaAfastamentos(policial.afastamentos);
        console.log('Retorno da API-funcionamento: ', policial);
      });
  }

  listaAfastamentos(afastamentos) {
    if (!afastamentos) {
      this.policial.afastamentos = this.afastamentos; // carrega lista vazia
    }

    this.dataSource = new MatTableDataSource<Afastamento>(afastamentos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onNovoAfastamento(): void {
    this.afastamento = new Afastamento();

    const dialogRef = this.dialog.open(AfastamentoPageDialogComponent, {
      width: '450px',
      data: this.afastamento
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.salvaNovoAfastamento(result);
      }
    });
  }

  salvaNovoAfastamento(novoAfastamento) {
    this.snackBar.open('Salvando dados...');

    this.afastamento = novoAfastamento;

    const msgSucesso = 'Salvo com sucesso!';
    const msgError = 'Erro ao salvar, tente novamente.';

    this.afastamentosService.adicionarSubElemento(this.policial.id, this.afastamento).subscribe(
      success => {
        this.snackBar.open(msgSucesso, 'Fechar', {
          duration: 6000
        });
        this.AtualizaDados(); // Atualiza a lista de afastamentos do policial
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

  onDeleteAfastamento(afastamento) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Tem certeza que deseja excluir este afastamento: ' + afastamento.motivo + '?'
    });

    const snack = this.snackBar.open('Deletando registro.');
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();

        this.deletarRegistroAtualizar(afastamento);

        snack.dismiss();
      } else {
        snack.dismiss();
      }
    });
  }

  deletarRegistroAtualizar(afastamento) {
    this.afastamentosService.deletarSubElemento(this.policial.id, afastamento)
    .subscribe(
      success => {
        this.snackBar.open('Afastamento removido!', 'Fechar', {
          duration: 2000
        });
        this.AtualizaDados();
      },
      error => {
        let msg = 'Tente novamente em instantes.';
        if (error.status === 400) {
          msg = error.error.erros.join(' ');
        }
        this.snackBar.open(msg, 'Erro', {
          duration: 5000
        });
      }
    );
  }

}
