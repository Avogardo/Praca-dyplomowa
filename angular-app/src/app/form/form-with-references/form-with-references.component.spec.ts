import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import FormWithReferencesComponent from './form-with-references.component';
import { FormsModule } from '@angular/forms';

describe('FormWithReferencesComponent', () => {
  let component: FormWithReferencesComponent;
  let fixture: ComponentFixture<FormWithReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        FormWithReferencesComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
