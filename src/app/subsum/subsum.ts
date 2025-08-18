import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { options } from './subsum.options';
import { IBSheetAngular } from '@ibsheet/angular';
import type { IBSheetInstance } from '@ibsheet/angular';

@Component({
  selector: 'app-subsum',
  imports: [SharedModules, IBSheetAngular],
  templateUrl: './subsum.html',
  styleUrl: './subsum.css'
})
export class Subsum {

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
  
  onSubSum(mode: number): void {
    const sheet = this.sheet

    if (sheet) {
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
}
