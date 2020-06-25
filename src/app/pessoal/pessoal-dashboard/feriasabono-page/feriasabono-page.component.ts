import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';

import { Pessoal } from 'src/app/shared/models/pessoal';
import { Licenca } from 'src/app/shared/models/licenca';
import { Router, ActivatedRoute } from '@angular/router';
import { PoliciaisService } from 'src/app/shared/services/policiais.service';
import { map, switchMap } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { FeriasabonoPageDialogComponent } from './feriasabono-page-dialog/feriasabono-page-dialog.component';

@Component({
  selector: 'app-feriasabono-page',
  templateUrl: './feriasabono-page.component.html',
  styleUrls: ['./feriasabono-page.component.css']
})
export class FeriasabonoPageComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  policial: Pessoal;
  licenca: Licenca = {descricaoLicenca: '', dataInicio: null, dataFim: null};

  licencas: Licenca[] = [];
  dataSource: MatTableDataSource<Licenca>;
  displayedColumns = ['descricaoLicenca', 'dataInicio', 'dataFim', 'actions'];

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute,
              private policiaisService: PoliciaisService, private snackBar: MatSnackBar) {
      this.dataSource = new MatTableDataSource(this.licencas);
    }

  ngOnInit() {
    this.AtualizaDados();
  }

  AtualizaDados() {
    this.route.params.pipe(
    map((params: any) => params.id),
    switchMap(id => this.policiaisService.buscaPorId(id))
    ).subscribe(policial => {
      this.policial = policial;
      this.listaLicencas(policial.licencas);
      console.log('Retorno da API-licença: ', policial);
    });
  }

  listaLicencas(licencas) {
    if (!licencas) {
      this.policial.licencas = this.licencas; // Lista vazia
    }

    this.dataSource = new MatTableDataSource<Licenca>(licencas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onNovaLicenca(): void {
    this.licenca = new Licenca();

    const dialogRef = this.dialog.open(FeriasabonoPageDialogComponent, {
      width: '450px',
      data: this.licenca
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.salvaNovaLicenca(result);
      }
    });
  }

  salvaNovaLicenca(novaLicenca) {
    // Necessário fazer a busca para carregar todos os arrays antes de salvar (Cursos, Ferias etc...)
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.policiaisService.buscaPorId(id))
        ).subscribe(policial => {
          this.policial = policial;
          if (!this.policial.licencas) {
            this.policial.licencas = this.licencas; // lista vazia
          }
          this.salvaLicenca(novaLicenca);
        });
  }

  salvaLicenca(novaLicenca) {
    this.snackBar.open('Salvando dados...');

    this.licenca = novaLicenca;

    const msgSucesso = 'Salvo com sucesso!';
    const msgError = 'Erro ao salvar, tente novamente.';

    this.policial.licencas.push(this.licenca);

    this.policiaisService.salvar(this.policial).subscribe(
      success => {
        this.snackBar.open(msgSucesso, 'Fechar', {
          duration: 6000
        });
        this.AtualizaDados(); // Atualiza a lista de licenças do policial
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

  onDeleteLicenca(licenca) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Tem certeza que deseja excluir esta licença: ' + licenca.descricaoLicenca + '?'
    });

    const snack = this.snackBar.open('Deletando registro.');
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();

        if (this.policial.licencas) {
          const index = this.policial.licencas.indexOf(licenca);
          this.policial.licencas.splice(licenca, 1); // Remove licença da lista atual
        }

        console.log('Removeu licenca: ', licenca);

        this.deletarRegistroAtualizar(this.policial);
        snack.dismiss();
      } else {
        snack.dismiss();
      }
    });
  }

  deletarRegistroAtualizar(policial) {
    this.policiaisService.salvar(policial)
    .subscribe(
      success => {
        this.snackBar.open('Licença removida!', 'Fechar', {
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
