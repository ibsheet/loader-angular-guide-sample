import { Component, OnInit } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './options';

@Component({
  selector: 'app-multirecord',
  templateUrl: './multirecord.component.html',
  styleUrls: ['./multirecord.component.css']
})
export class MultirecordComponent implements OnInit {

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }

}
