import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options, detailData } from './master-detail.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-master-detail',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './master-detail.html',
  styleUrl: './master-detail.css'
})
export class MasterDetail {

  sheet?: IBSheetInstance;
  sheet2?: IBSheetInstance;

  sheetOptions: any;
  sheetOptions2: any;
  data: any;
  data2 = detailData;

  obj = options.map((x: { sheetOptions: any; sheetData: any, sheetId: string }) => {
    if (x.sheetId == 'masterSheet') {
      this.sheetOptions = x.sheetOptions;
      this.data = x.sheetData;
    } else if (x.sheetId == 'detailSheet') {
      this.sheetOptions2 = x.sheetOptions;
    }
  });

  getInstance(obj: IBSheetInstance): void {
    this.sheet = obj;
    this.sheet.loadSearchData(this.data);

    this.sheet.bind("onFocus", (param: any) => {
      if (param.orow && param.row !== param.orow) {
        const sigun = param.row.sSiGunGu;
        let dData: Array<any> = [];

        switch (sigun) {
          case '관악구':
            dData = this.data2.gwanak;
            break;
          case '광진구':
            dData = this.data2.gwangjin;
            break;
          case '금천구':
            dData = this.data2.geumcheon;
            break;
          case '동작구':
            dData = this.data2.dongjak;
            break;
          case '서초구':
            dData = this.data2.seocho;
            break;
          case '송파구':
            dData = this.data2.songpa;
            break;
          default:
            break;
        }
        if(this.sheet2) {
          this.sheet2.loadSearchData(dData);
        }
      }
    });
  }

  getInstance2(obj: IBSheetInstance): void {
    this.sheet2 = obj;
    this.sheet2.loadSearchData(this.data2.gwanak);
  }
}
