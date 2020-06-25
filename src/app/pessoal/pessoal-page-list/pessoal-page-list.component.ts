import { Pessoal } from './../../shared/models/pessoal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { PoliciaisService } from './../../shared/services/policiais.service';
import { MascarasFormater } from 'src/app/shared/directives/mascaras-formater';

@Component({
  selector: 'app-pessoal-page-list',
  templateUrl: './pessoal-page-list.component.html',
  styleUrls: ['./pessoal-page-list.component.css']
})
export class PessoalPageListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  pessoal: Pessoal[] = [];

  dataSource: MatTableDataSource<Pessoal>;
  iTotalRegistros = 0;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['matricula', 'nomeGuerra', 'postoGraduacao', 'quadro', 'endereco.celular', 'transferido', 'actions'];

  sortingDataAccessor =
    (data: object, sortHeaderId: string): string | number => {
      const propPath = sortHeaderId.split('.');
      const value: any = propPath
        .reduce((curObj, property) => curObj[property], data);
      return !isNaN(value) ? Number(value) : value;
    }

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private service: PoliciaisService,
              private router: Router, private route: ActivatedRoute, public mascara: MascarasFormater) {

    this.dataSource = new MatTableDataSource(this.pessoal); // para o paginator funcionar
  }

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados() {
    const snack = this.snackBar.open('Obtendo dados...');

    this.service.listar()
    .subscribe(
      dados => {this.carregarDados(dados),
      console.log('dados', JSON.stringify(dados)),
      this.iTotalRegistros = dados.length,
      snack.dismiss();
      },
      erro => {
        snack.dismiss();
        let msg = 'Tente novamente em instantes.';
        if (erro.status === 400) {
          msg = erro.error.errors.join(' ');
        }
        this.snackBar.open(msg, 'Erro', {duration: 5000 });
      }
    );

  }

  carregarDados(data) {
    this.dataSource = new MatTableDataSource<Pessoal>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 }

 onEdit(id) {
   // passa o id p/ rota e vai para a tela de edição
   this.router.navigate(['pessoal-page-form', id]);

  // a linha abaixo adiciona a rota: pessoal-page-form/id na rota ativa que no caso é pessoal-page-list - INCORRETA
  // this.router.navigate(['pessoal-page-form', id], { relativeTo: this.route});

 }

  onDelete(id) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Tem certeza de que deseja excluir esse policial?'
    });

    const snack = this.snackBar.open('Deletando registro');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        // Deletar registro aqui
        this.deletarRegistro(id);

        snack.dismiss();
      } else {
        snack.dismiss();
      }
    });
  }

  deletarRegistro(id) {

    this.service.deletar(id)
    .subscribe(
      success => {
        this.snackBar.open('Registro deletado!', 'Fechar', {
          duration: 2000,
        });
        this.atualizarDados();
      },
      error => {
        let msg = 'Tente novamente em instantes.';
        if (error.status === 400) {
          msg = error.error.errors.join(' ');
        }
        this.snackBar.open(msg, 'Erro', {duration: 5000 });
      }
    );

// CÓDIGO ABAIXO É PARA PRÓXIMOS EXEMPLOS... SÓ EXCLUI DO DATASOURCE!
/*     const index = this.dataSource.data.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
    }

    this.dataSource._updateChangeSubscription();
    console.log(this.dataSource); */
 }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onControl(id) {

    this.router.navigate(['pessoal-dashboard', id]);
  }

}
