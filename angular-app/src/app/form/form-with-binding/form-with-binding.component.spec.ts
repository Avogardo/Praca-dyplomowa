import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import FormWithBindingComponent from './form-with-binding.component';
import FormModel from '../FormModel';
import FormTypes from '../FormTypes';

describe('FormWithBindingComponent', () => {
  let component: FormWithBindingComponent;
  let fixture: ComponentFixture<FormWithBindingComponent>;
  const formsWithBinding: FormModel[] = [
    new FormModel(FormTypes.Text, 'text'),
    new FormModel(FormTypes.Number, 1),
    new FormModel(FormTypes.Submit, 'Submit'),
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        FormWithBindingComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithBindingComponent);
    component = fixture.componentInstance;
    component.inputs = formsWithBinding;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('always renders a form wrapper', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.form-wrapper')).toBeDefined();
  });

  it('always renders a form element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  });

  it('always renders as much inputs ad form prop contain', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input').length).toBe(formsWithBinding.length);
  });

  it('always renders inputs with type as in form models', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const inputs: HTMLInputElement[] = compiled.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement, index: number) => {
      expect(input.type).toBe(formsWithBinding[index].type);
    });
  });

  it('always renders inputs with value as in form models', () => {
    component.inputs.forEach((input: FormModel, index: number) => {
      expect(input.text).toBe(formsWithBinding[index].text);
    });
  });
});
