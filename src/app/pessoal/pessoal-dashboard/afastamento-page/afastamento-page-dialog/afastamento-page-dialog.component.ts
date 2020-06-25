import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

import { Afastamento } from 'src/app/shared/models/afastamento';
import { TiposAfastamento } from 'src/app/shared/models/tipos-afastamento';



@Component({
  selector: 'app-afastamento-page-dialog',
  templateUrl: './afastamento-page-dialog.component.html',
  styleUrls: ['./afastamento-page-dialog.component.css']
})
export class AfastamentoPageDialogComponent implements OnInit {

  tiposAfastamentos: any[];

  constructor(
    private tiposAfastamento: TiposAfastamento, public dialogRef: MatDialogRef<AfastamentoPageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Afastamento) { }

  ngOnInit() {
    this.tiposAfastamentos = this.tiposAfastamento.getTiposAfastamento();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
