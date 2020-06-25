import { Licenca } from './../../../../shared/models/licenca';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-feriasabono-page-dialog',
  templateUrl: './feriasabono-page-dialog.component.html',
  styleUrls: ['./feriasabono-page-dialog.component.css']
})
export class FeriasabonoPageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FeriasabonoPageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Licenca) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
