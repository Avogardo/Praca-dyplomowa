import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import FormWithReferencesComponent from './form-with-references.component';

describe('FormWithReferencesComponent', () => {
  let component: FormWithReferencesComponent;
  let fixture: ComponentFixture<FormWithReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithReferencesComponent ]
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
