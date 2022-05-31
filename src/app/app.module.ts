import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';

import { HomeComponent } from './home/home.component';
import { TypeComponent } from './type/type.component';
import { MergeComponent } from './merge/merge.component';
import { TreeComponent } from './tree/tree.component';
import { DataloadComponent } from './dataload/dataload.component';
import { SubsumComponent } from './subsum/subsum.component';
import { FormulaComponent } from './formula/formula.component';
import { MultirecordComponent } from './multirecord/multirecord.component';
import { ServerscrollpagingComponent } from './serverscrollpaging/serverscrollpaging.component';
import { FormComponent } from './form/form.component';
import { MultipleComponent } from './multiple/multiple.component';
import { DialogComponent, DialogOverview } from './dialog/dialog.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { SheetCreateComponent } from './config/sheet-create/sheet-create.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'type', component: TypeComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'dataload', component: DataloadComponent },
  { path: 'subsum', component: SubsumComponent },
  { path: 'formula', component: FormulaComponent },
  { path: 'multirecord', component: MultirecordComponent },
  { path: 'serverscrollpaging', component: ServerscrollpagingComponent},
  { path: 'form', component: FormComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'masterDetail', component: MasterDetailComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeComponent,
    MergeComponent,
    TreeComponent,
    DataloadComponent,
    SubsumComponent,
    FormulaComponent,
    MultirecordComponent,
    ServerscrollpagingComponent,
    FormComponent,
    MultipleComponent,
    DialogComponent,
    DialogOverview,
    MasterDetailComponent,
    SheetCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
