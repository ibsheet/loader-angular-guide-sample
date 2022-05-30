import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-sheet-create',
  templateUrl: './sheet-create.component.html',
  styleUrls: ['./sheet-create.component.css']
})
export class SheetCreateComponent implements OnInit, OnDestroy {

  options: any;

  constructor(@Inject(Array) options: any) {
    this.options = options;
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setSheet(): any {
    this.options.map((x: { sheetId: string; sheetEl: string; sheetOptions: any; sheetData: any; }) => {
      loader.createSheet({
        id: x.sheetId,
        el: x.sheetEl,
        options: x.sheetOptions,
        data: x.sheetData
      })
      .then((sheet: any) => {
        // 시트 객체 생성, 시트 렌더링 x
      })
      .catch((err: any) => {
        console.log('Failed to create sheet', err);
      });
    })
  }
  removeSheet(): void {
    this.options.map((x: { sheetId: any; }) => {
      loader.removeSheet(x.sheetId);
    })
  }

}
