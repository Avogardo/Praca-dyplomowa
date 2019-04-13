import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import FormWithBindingComponent from './form/form-with-binding/form-with-binding.component';
import FormWithReferencesComponent from './form/form-with-references/form-with-references.component';


const routes: Routes = [
  { path: 'form-with-binding', component: FormWithBindingComponent },
  { path: 'form-with-references', component: FormWithReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
