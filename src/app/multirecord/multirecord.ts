import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './multirecord.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-multirecord',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './multirecord.html',
  styleUrl: './multirecord.css'
})
export class Multirecord {

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
