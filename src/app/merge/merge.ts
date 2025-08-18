import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './merge.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

interface mergeInfo {
  value: string;
  valueString: string;
}

@Component({
  selector: 'app-merge',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './merge.html',
  styleUrl: './merge.css'
})
export class Merge {
  merge1: mergeInfo[] = [
    {value: '0', valueString: 'HeaderMerge: 0'},
    {value: '1', valueString: 'HeaderMerge: 1'},
    {value: '2', valueString: 'HeaderMerge: 2'},
    {value: '3', valueString: 'HeaderMerge: 3'},
    {value: '4', valueString: 'HeaderMerge: 4'},
    {value: '5', valueString: 'HeaderMerge: 5'},
    {value: '6', valueString: 'HeaderMerge: 6'},
  ];
  merge2: mergeInfo[] = [
    {value: '0', valueString: 'DataMerge: 0'},
    {value: '1', valueString: 'DataMerge: 1'},
    {value: '2', valueString: 'DataMerge: 2'},
    {value: '3', valueString: 'DataMerge: 3'},
    {value: '4', valueString: 'DataMerge: 4'},
    {value: '5', valueString: 'DataMerge: 5'},
    {value: '6', valueString: 'DataMerge: 6'},
  ];
  merge3: mergeInfo[] = [
    {value: '0', valueString: 'PrevColumnMerge: 0'},
    {value: '1', valueString: 'PrevColumnMerge: 1'},
    {value: '2', valueString: 'PrevColumnMerge: 2'},
    {value: '3', valueString: 'PrevColumnMerge: 3'},
  ];

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
  OnHeaderSelect(arg: string): void {
    const sheet = this.sheet
    if (sheet) {
      const num = Number(arg);
      sheet.setAutoMerge(sheet.DataMerge, num, sheet.PrevColumnMerge);
    }
  }
  OnDataSelect(arg: string): void {
    const sheet = this.sheet
    if (sheet) {
      const num = Number(arg);
      sheet.setAutoMerge(num, sheet.HeaderMerge, sheet.PrevColumnMerge);
    }
  }
  OnPrevSelect(arg: string): void {
    const sheet = this.sheet
    if (sheet) {
      const num = Number(arg);
      sheet.setAutoMerge(sheet.DataMerge, sheet.HeaderMerge, num);
    }
  }
  
}
