import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './master-detail.options';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-master-detail',
  imports: [SharedModules],
  templateUrl: './master-detail.html',
  styleUrl: './master-detail.css'
})
export class MasterDetail implements OnInit, OnDestroy {

  constructor() { }

  sheet = new SheetCreate(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
}
