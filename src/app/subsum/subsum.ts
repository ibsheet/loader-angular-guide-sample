import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './subsum.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-subsum',
  imports: [],
  templateUrl: './subsum.html',
  styleUrl: './subsum.css'
})
export class Subsum implements OnInit, OnDestroy {

  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onSubSum(mode: number): void {
    const sheet = loader.getIBSheetStatic()[0];

    switch(mode) {
      case 1:
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'A|B|C|D',
            position: 'bottom',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col',
                span: 3
              },
              {
                col: 'E',
                val: ' ',
                cumVal: ' ',
                span: 2
              }
            ]
          }
        ]);
        break;
      case 2:
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'A|B|C|D',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col',
                span: 3
              }
            ],
            showCumulate: 1,
            position: 'bottom'
          }
        ]);
        break;
      case 3:
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'B|C',
            position: 'bottom'
          },
          {
            stdCol: 'sUnit',
            avgCols: 'B|C',
            captionCol: [
              {
                col: 'sUnit',
                val: '%s: %col'
              }
            ],
            position: 'bottom'
          },
        ]);
        break;
      case 4:
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'B|C',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            showCumulate: 1,
            position: 'bottom'
          },
          {
            stdCol: 'sUnit',
            avgCols: 'B|C',
            captionCol: [
              {
                col: 'sUnit',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            showCumulate: 1,
            position: 'bottom'
          },
          {
            stdCol: 'sDetail',
            avgCols: 'A|D',
            captionCol: [
              {
                col: 'sDetail',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            countCols: 'E',
            showCumulate: 1,
            position: 'bottom'
          }
        ]);
        break;
      case 5:
        sheet.removeSubTotal();
        break;

    }
  }
}
