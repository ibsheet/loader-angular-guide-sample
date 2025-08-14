import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './serverscrollpaging.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-serverscrollpaging',
  imports: [SharedModules],
  templateUrl: './serverscrollpaging.html',
  styleUrl: './serverscrollpaging.css'
})
export class Serverscrollpaging implements OnInit, OnDestroy {
  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
