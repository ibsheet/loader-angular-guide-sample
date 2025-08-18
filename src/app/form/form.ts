import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './form.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-form',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

  sheet?: IBSheetInstance;

  sheetOptions: any;
  data: any;

  obj = options.map((x: { sheetOptions: any; sheetData: any }) => {
    this.sheetOptions = x.sheetOptions;
    this.data = x.sheetData;
  });

  getInstance(obj: IBSheetInstance): void {
    this.sheet = obj;
  }

  onSetValue(arg:any): void {
    const sheet = this.sheet;
    if (sheet) sheet.setValue(sheet.getFocusedRow(), arg.target.id, arg.target.value);
  }
}
