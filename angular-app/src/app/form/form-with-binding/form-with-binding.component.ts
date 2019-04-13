import { Component } from '@angular/core';
import FormModel from '../FormModel';
import FormTypes from '../FormTypes';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-with-binding',
  templateUrl: './form-with-binding.component.html',
  styleUrls: ['./form-with-binding.component.scss'],
})
export default class FormWithBindingComponent {
  formTypes: typeof FormTypes = FormTypes;
  inputs: FormModel[] = [];

  constructor(private formService: FormService) {
    this.inputs = this.formService.getInputs();
  }
}
