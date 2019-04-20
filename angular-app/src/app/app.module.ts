import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from './app.component';
import FormWithBindingComponent from './form/form-with-binding';
import NavigationComponent from './navigation';
import FormWithReferencesComponent from './form/form-with-references';
import TableComponent from './table';
import AppRoutingModule from './app-routing.module';
import { FormService } from './form/form.service';
import { TableService } from './table/table.service';

@NgModule({
  declarations: [
    AppComponent,
    FormWithBindingComponent,
    NavigationComponent,
    FormWithReferencesComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FormService, TableService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
