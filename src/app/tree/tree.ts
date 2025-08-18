import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './tree.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

interface treelevelInfo {
  value: string;
  valueString: string;
}

@Component({
  selector: 'app-tree',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './tree.html',
  styleUrl: './tree.css'
})
export class Tree {
  treelevel: treelevelInfo[] = [
    {value: '1', valueString: 'showTreeLevel: 1'},
    {value: '2', valueString: 'showTreeLevel: 2'},
    {value: '3', valueString: 'showTreeLevel: 3'},
    {value: '4', valueString: 'showTreeLevel: 4'},
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

  onTreeSelect(arg: string): void {
    const sheet = this.sheet
    if (sheet) {
      const num = Number(arg);
      sheet.showTreeLevel(num);
    }
  }
}
