import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './dataload.options';
import loader from '@ibsheet/loader';
// import { IB_Preset } from '../config/common';

interface loadInfo {
  value: number;
  valueString: string;
}

@Component({
  selector: 'app-dataload',
  imports: [SharedModules],
  templateUrl: './dataload.html',
  styleUrl: './dataload.css'
})
export class Dataload implements OnInit, OnDestroy {
   loadv: loadInfo[] = [
    {value: 100000, valueString: '100,000 건'},
    {value: 200000, valueString: '200,000 건'},
    {value: 300000, valueString: '300,000 건'},
  ];
  
  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onLoadData(count: number): void {
    const sheet = loader.getIBSheetStatic()[0];
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
