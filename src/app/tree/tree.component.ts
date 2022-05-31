import { Component, OnInit, OnDestroy } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './tree.options';
import loader from '@ibsheet/loader';

interface treelevelInfo {
  value: string;
  valueString: string;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy {
  treelevel: treelevelInfo[] = [
    {value: '1', valueString: 'showTreeLevel: 1'},
    {value: '2', valueString: 'showTreeLevel: 2'},
    {value: '3', valueString: 'showTreeLevel: 3'},
    {value: '4', valueString: 'showTreeLevel: 4'},
  ];

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  onTreeSelect(arg: string): void {
    const sheet = loader.getIBSheetStatic()[0];
    if (sheet) sheet.showTreeLevel(arg);
  }

}
