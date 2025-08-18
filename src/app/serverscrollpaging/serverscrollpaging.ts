import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './serverscrollpaging.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-serverscrollpaging',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './serverscrollpaging.html',
  styleUrl: './serverscrollpaging.css'
})
export class Serverscrollpaging {
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
