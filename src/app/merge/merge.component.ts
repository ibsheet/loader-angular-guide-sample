import { Component, OnInit, OnDestroy } from '@angular/core';
import { SheetCreateComponent } from '../config/sheet-create/sheet-create.component';
import { options } from './options';
import loader from '@ibsheet/loader';

interface mergeInfo {
  value: string;
  valueString: string;
}

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit, OnDestroy {
  merge1: mergeInfo[] = [
    {value: '0', valueString: 'HeaderMerge: 0'},
    {value: '1', valueString: 'HeaderMerge: 1'},
    {value: '2', valueString: 'HeaderMerge: 2'},
    {value: '3', valueString: 'HeaderMerge: 3'},
    {value: '4', valueString: 'HeaderMerge: 4'},
    {value: '5', valueString: 'HeaderMerge: 5'},
    {value: '6', valueString: 'HeaderMerge: 6'},
  ];
  merge2: mergeInfo[] = [
    {value: '0', valueString: 'DataMerge: 0'},
    {value: '1', valueString: 'DataMerge: 1'},
    {value: '2', valueString: 'DataMerge: 2'},
    {value: '3', valueString: 'DataMerge: 3'},
    {value: '4', valueString: 'DataMerge: 4'},
    {value: '5', valueString: 'DataMerge: 5'},
    {value: '6', valueString: 'DataMerge: 6'},
  ];
  merge3: mergeInfo[] = [
    {value: '0', valueString: 'PrevColumnMerge: 0'},
    {value: '1', valueString: 'PrevColumnMerge: 1'},
    {value: '2', valueString: 'PrevColumnMerge: 2'},
    {value: '3', valueString: 'PrevColumnMerge: 3'},
  ];

  constructor() { }

  sheet = new SheetCreateComponent(options);

  ngOnInit(): void {
    this.sheet.setSheet();
  }
  ngOnDestroy(): void {
    this.sheet.removeSheet();
  }
  OnHeaderSelect(arg: string): void {
    const sheet = loader.getIBSheetStatic()[0];
    if (sheet) sheet.setAutoMerge(sheet.DataMerge, arg, sheet.PrevColumnMerge);
  }
  OnDataSelect(arg: string): void {
    const sheet = loader.getIBSheetStatic()[0];
    if (sheet) sheet.setAutoMerge(arg, sheet.HeaderMerge, sheet.PrevColumnMerge);
  }
  OnPrevSelect(arg: string): void {
    const sheet = loader.getIBSheetStatic()[0];
    if (sheet) sheet.setAutoMerge(sheet.DataMerge, sheet.HeaderMerge, arg);
  }

}
