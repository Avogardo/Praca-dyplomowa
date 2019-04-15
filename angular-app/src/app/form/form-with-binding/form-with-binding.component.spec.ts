import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import FormWithBindingComponent from './form-with-binding.component';
import { FormsModule } from '@angular/forms';

describe('FormWithBindingComponent', () => {
  let component: FormWithBindingComponent;
  let fixture: ComponentFixture<FormWithBindingComponent>;

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
});
