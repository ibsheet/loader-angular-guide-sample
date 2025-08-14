import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './multirecord.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-multirecord',
  imports: [],
  templateUrl: './multirecord.html',
  styleUrl: './multirecord.css'
})
export class Multirecord implements OnInit, OnDestroy {

  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
