import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './multiple.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-multiple',
  imports: [SharedModules],
  templateUrl: './multiple.html',
  styleUrl: './multiple.css'
})
export class Multiple implements OnInit, OnDestroy {
  constructor() { }

  sheet = new SheetCreate(options);

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
