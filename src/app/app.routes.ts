import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Type } from './type/type';
import { Merge } from './merge/merge';
import { Tree } from './tree/tree';
import { Dataload } from './dataload/dataload';
import { Subsum } from './subsum/subsum';
import { Formula } from './formula/formula';
import { Multirecord } from './multirecord/multirecord';
import { Serverscrollpaging } from './serverscrollpaging/serverscrollpaging';
import { Form } from './form/form';
import { Multiple } from './multiple/multiple';
import { Dialog } from './dialog/dialog';
import { MasterDetail } from './master-detail/master-detail';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'type', component: Type},
    {path: 'merge', component: Merge},
    {path: 'tree', component: Tree},
    {path: 'dataload', component: Dataload},
    {path: 'subsum', component: Subsum},
    {path: 'formula', component: Formula},
    {path: 'multirecord', component: Multirecord},
    {path: 'serverscrollpaging', component: Serverscrollpaging},
    {path: 'form', component: Form},
    {path: 'multiple', component: Multiple},
    {path: 'dialog', component: Dialog},
    {path: 'masterDetail', component: MasterDetail},
];
