import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import FormWithBindingComponent from './form/form-with-binding/form-with-binding.component';
import NavigationComponent from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FormService } from './form/form.service';
import FormWithReferencesComponent from './form/form-with-references/form-with-references.component';

@NgModule({
  declarations: [
    AppComponent,
    FormWithBindingComponent,
    NavigationComponent,
    FormWithReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule { }
