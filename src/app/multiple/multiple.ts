import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './multiple.options';
import loader from '@ibsheet/loader';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';


@Component({
  selector: 'app-multiple',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './multiple.html',
  styleUrl: './multiple.css'
})
export class Multiple {
  
  sheet?: IBSheetInstance;
  sheet2?: IBSheetInstance;
  sheet3?: IBSheetInstance;

  sheetOptions: any;
  sheetOptions2: any;
  sheetOptions3: any;
  data: any;
  data2: any;
  data3: any;

  isSheetVisible = true;

  obj = options.map((x: { sheetOptions: any; sheetData: any, sheetId: string }) => {
    if (x.sheetId == 'sheet1') {
      this.sheetOptions = x.sheetOptions;
      this.data = x.sheetData;
    } else if (x.sheetId == 'sheet2') {
      this.sheetOptions2 = x.sheetOptions;
      this.data2 = x.sheetData;
    } else if (x.sheetId == 'sheet3') {
      this.sheetOptions3 = x.sheetOptions;
      this.data3 = x.sheetData;
    }
  });

  getInstance(obj: IBSheetInstance): void {
    this.sheet = obj;
    this.sheet.loadSearchData(this.data);
  }

  getInstance2(obj: IBSheetInstance): void {
    this.sheet2 = obj;
    this.sheet2.loadSearchData(this.data2);
  }

  getInstance3(obj: IBSheetInstance): void {
    this.sheet3 = obj;
    this.sheet3.loadSearchData(this.data3);
  }

  onSheetState(mode: string): void {
    if (mode === 'remove') this.isSheetVisible = false;  
    if (mode == 'create') {
      if (this.isSheetVisible) return;
      else this.reloadSheet();
    }
  }

  reloadSheet() {
    this.isSheetVisible = false;

    setTimeout(() => {
      this.sheetOptions = { ...this.sheetOptions };
      this.sheetOptions2 = { ...this.sheetOptions2 };
      this.sheetOptions3 = { ...this.sheetOptions3 };

      this.isSheetVisible = true;
    }, 0);
  }
}
