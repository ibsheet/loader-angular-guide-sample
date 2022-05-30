import { Component, OnInit } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onSheetState(mode: string): void {
    const ibsheet = loader.getIBSheetStatic();

    if (mode === 'remove' || ibsheet.length) ibsheet.disposeAll();
    if (mode === 'create') this.sheet.setSheet();
  }

}
