import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import TableComponent from './table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import FormWithBindingComponent from '../form/form-with-binding/form-with-binding.component';
import FormWithReferencesComponent from '../form/form-with-references/form-with-references.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
      declarations: [
        TableComponent,
        FormWithBindingComponent,
        FormWithReferencesComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
