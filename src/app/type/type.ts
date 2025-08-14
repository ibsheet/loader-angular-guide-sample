import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './type.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-type',
  imports: [SharedModules],
  templateUrl: './type.html',
  styleUrl: './type.css'
})
export class Type implements OnInit, OnDestroy {
  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
