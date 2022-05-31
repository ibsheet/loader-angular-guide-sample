import { Component, OnInit, OnDestroy } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './master-detail.options';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit, OnDestroy {

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }

}
