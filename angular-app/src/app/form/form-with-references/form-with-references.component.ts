import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormService } from '../form.service';
import FormTypes from '../FormTypes';
import FormModel from '../FormModel';

@Component({
  selector: 'app-form-with-references',
  templateUrl: './form-with-references.component.html',
  styleUrls: ['./form-with-references.component.scss'],
})
export default class FormWithReferencesComponent {
  @ViewChildren('inputElement')
  viewChildren !: QueryList<ElementRef>;

  formTypes: typeof FormTypes = FormTypes;
  inputs: FormModel[] = [];

  constructor(private formService: FormService) {
    this.inputs = this.formService.getInputs();
  }

  onKeyAction(): void {
    this.viewChildren.forEach((element: ElementRef, index: number): void => {
      this.inputs[index].text = element.nativeElement.value;
    });
  }
}
