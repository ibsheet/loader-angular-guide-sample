import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import loader from '@ibsheet/loader';
import { detailData } from '../../master-detail/master-detail.options';

@Component({
  selector: 'app-sheet-create',
  imports: [],
  templateUrl: './sheet-create.html',
  styleUrl: './sheet-create.css'
})
export class SheetCreate implements OnInit, OnDestroy {

  options: any;

  constructor(@Inject(Array) options: any) {
    this.options = options;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
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
        // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
        if (sheet.id === 'detailSheet') {
          const ibsheet = loader.getIBSheetStatic();
          if (!ibsheet.onRenderFirstFinishAll) {
            ibsheet.onRenderFirstFinishAll = (evt: any) => {
              if (ibsheet['masterSheet']) {
                ibsheet['masterSheet'].bind("onFocus", (param: any) => {
                  if (param.orow && param.row !== param.orow) {
                    const sigun = param.row.sSiGunGu;
                    let dData: Array<any> = [];

                    switch (sigun) {
                      case '관악구':
                        dData = detailData.gwanak;
                        break;
                      case '광진구':
                        dData = detailData.gwangjin;
                        break;
                      case '금천구':
                        dData = detailData.geumcheon;
                        break;
                      case '동작구':
                        dData = detailData.dongjak;
                        break;
                      case '서초구':
                        dData = detailData.seocho;
                        break;
                      case '송파구':
                        dData = detailData.songpa;
                        break;
                      default:
                        break;
                    }
                    evt.sheet.loadSearchData(dData);
                  }
                });
              }
            }
          }
        }
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
