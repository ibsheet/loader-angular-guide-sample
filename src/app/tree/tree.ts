import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { SheetCreate } from '../config/sheet-create/sheet-create';
import { options } from './tree.options';
import loader from '@ibsheet/loader';

interface treelevelInfo {
  value: string;
  valueString: string;
}

@Component({
  selector: 'app-tree',
  imports: [SharedModules],
  templateUrl: './tree.html',
  styleUrl: './tree.css'
})
export class Tree implements OnInit, OnDestroy {
  treelevel: treelevelInfo[] = [
    {value: '1', valueString: 'showTreeLevel: 1'},
    {value: '2', valueString: 'showTreeLevel: 2'},
    {value: '3', valueString: 'showTreeLevel: 3'},
    {value: '4', valueString: 'showTreeLevel: 4'},
  ];

  constructor() { }

  sheet = new SheetCreate(options);

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
