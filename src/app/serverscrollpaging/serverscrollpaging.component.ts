import { Component, OnInit } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './serverscrollpaging.options';

@Component({
  selector: 'app-serverscrollpaging',
  templateUrl: './serverscrollpaging.component.html',
  styleUrls: ['./serverscrollpaging.component.css']
})
export class ServerscrollpagingComponent implements OnInit {

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }

}
