import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './formula.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-formula',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './formula.html',
  styleUrl: './formula.css'
})
export class Formula {

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
  
}
