import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './form.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-form',
  imports: [SharedModules],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit, OnDestroy {
  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onSetValue(arg:any): void {
    const sheet = loader.getIBSheetStatic()[0];
    sheet.setValue(sheet.getFocusedRow(), arg.target.id, arg.target.value);
  }
}
