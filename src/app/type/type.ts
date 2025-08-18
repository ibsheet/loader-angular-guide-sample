import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './type.options';
import { IBSheetAngular } from '@ibsheet/angular';

@Component({
  selector: 'app-type',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './type.html',
  styleUrl: './type.css',
})
export class Type {
  sheetOptions: any;
  data: any;

  obj = options.map((x: { sheetOptions: any; sheetData: any }) => {
    this.sheetOptions = x.sheetOptions;
    this.data = x.sheetData;
  });
}
