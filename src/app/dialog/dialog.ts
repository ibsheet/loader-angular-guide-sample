import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './dialog.options';
import { dialogoptions } from './dialog.dialog.options';
import loader from '@ibsheet/loader';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  imports: [SharedModules],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class Dialog implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog) { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onOpenDialog(mode?: number): void {
    this.dialog.open(DialogOverview, {
      width: '50%',
      height: '50%',
      disableClose: false
    });
  }
}

@Component({
  selector: 'dialog-matertial-component',
  templateUrl: './dialog.matertial.html'
})
export class DialogOverview implements OnInit, OnDestroy  {
  constructor(private dialogRef: MatDialogRef<DialogOverview>) {}

  sheet = new SheetCreate(dialogoptions);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  close(): void {
    this.dialogRef.close();
  }
}