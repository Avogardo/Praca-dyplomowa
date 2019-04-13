import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import FormWithBindingComponent from './form-with-binding.component';

describe('FormWithBindingComponent', () => {
  let component: FormWithBindingComponent;
  let fixture: ComponentFixture<FormWithBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
