import { Routes } from '@angular/router';
import { CatgyComponent } from './catgy/catgy.component';
import { InputComponent } from './input/input.component';
import { TreeComponent } from './tree/tree.component';
import { DockComponent } from './dock/dock.component';

export const routes: Routes = [
    { path: 'catgy', component: CatgyComponent, data: { text: 'catgy' } }, 
    { path: 'input', component: InputComponent, data: { text: 'input' } },
    { path: 'tree', component: TreeComponent, data: { text: 'tree' } },
    { path: 'dock', component: DockComponent, data: { text: 'dock' } },
];
