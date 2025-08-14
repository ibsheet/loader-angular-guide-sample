import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './formula.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-formula',
  imports: [],
  templateUrl: './formula.html',
  styleUrl: './formula.css'
})
export class Formula implements OnInit, OnDestroy {

  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
