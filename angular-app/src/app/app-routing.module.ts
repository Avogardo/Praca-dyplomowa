import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import FormWithBindingComponent from './form/form-with-binding';
import FormWithReferencesComponent from './form/form-with-references';
import TableComponent from './table';

const routes: Routes = [
  { path: 'form-with-binding', component: FormWithBindingComponent },
  { path: 'form-with-references', component: FormWithReferencesComponent },
  { path: 'server-table', component: TableComponent },
  { path: 'big-table', component: TableComponent, data: { bigTable: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {
}
