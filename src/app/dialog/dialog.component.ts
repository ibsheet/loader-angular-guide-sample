import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './dialog.options';
import { dialogoptions } from './dialog.dialog.options';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog) { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onOpenDialog(mode?: number): void {
    this.dialog.open(DialogOverview, {
      width: '50%',
      height: '50%'
    });
  }

}

@Component({
  selector: 'dialog-matertial-component',
  templateUrl: 'dialog.matertial.component.html'
})
export class DialogOverview implements OnInit, OnDestroy  {
  constructor() {}

  sheet = new SheetCreateComponent(dialogoptions);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
