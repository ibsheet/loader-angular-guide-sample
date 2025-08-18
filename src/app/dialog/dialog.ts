import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './dialog.options';
import { dialogoptions } from './dialog.dialog.options';
import loader from '@ibsheet/loader';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class Dialog {
  constructor(public dialog: MatDialog) { }

  sheet?: IBSheetInstance;

  sheetOptions: any;
  data: any;

  obj = options.map((x: { sheetOptions: any; sheetData: any }) => {
    this.sheetOptions = x.sheetOptions;
    this.data = x.sheetData;
  });

  getInstance(obj: IBSheetInstance): void {
    this.sheet = obj;
    this.sheet.loadSearchData(this.data)
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
  imports: [IBSheetAngular],
  templateUrl: './dialog.matertial.html'
})
export class DialogOverview {
  constructor(private dialogRef: MatDialogRef<DialogOverview>) {}

  sheet?: IBSheetInstance;

  sheetOptions: any;
  data: any;

  obj = dialogoptions.map((x: { sheetOptions: any; sheetData: any }) => {
    this.sheetOptions = x.sheetOptions;
    this.data = x.sheetData;
  });

  getInstance(obj: IBSheetInstance): void {
    this.sheet = obj;
  }

  close(): void {
    this.dialogRef.close();
  }
}