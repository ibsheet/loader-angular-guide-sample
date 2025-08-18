import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './dataload.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

interface loadInfo {
  value: number;
  valueString: string;
}

@Component({
  selector: 'app-dataload',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './dataload.html',
  styleUrl: './dataload.css'
})
export class Dataload {
   loadv: loadInfo[] = [
    {value: 100000, valueString: '100,000 건'},
    {value: 200000, valueString: '200,000 건'},
    {value: 300000, valueString: '300,000 건'},
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

  onLoadData(count: number): void {
    const sheet = this.sheet
    if (sheet) {
      const data: any[] = [];
      const company = [
        'Google',
        'Apple',
        '삼성전자',
        'LG전자',
        '한화',
        'Microsoft',
        '현대',
        '현기차',
        'SK',
        '롯데'
      ];
      const country = [
        '미국',
        '일본',
        '한국',
        '영국',
        '캐나다',
        '중국',
        '프랑스',
        '브라질',
        '인도',
        '이탈리아'
      ];

      for (let i = 0; i < count; i++) {
        data.push({
          sCompany: company[Math.floor(Math.random() * 10)],
          sCountry: country[Math.floor(Math.random() * 10)],
          sSaleQuantity: Math.floor(Math.random() * 100000),
          sSaleIncrease: Math.floor(Math.random() * 10000),
          sPrice: Math.floor(Math.random() * 10000000),
          sSatisfaction: Math.floor(Math.random() * (100 - 50 + 1) + 50)
        });
      }

      sheet.loadSearchData(data);
    }
  }
}
