import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import FormWithBindingComponent from './form-with-binding/form-with-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FormWithBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
