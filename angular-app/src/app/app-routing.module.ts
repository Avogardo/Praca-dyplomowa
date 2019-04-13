import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import FormWithBindingComponent from './form/form-with-binding/form-with-binding.component';


const routes: Routes = [
  { path: 'form-with-binding', component: FormWithBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
