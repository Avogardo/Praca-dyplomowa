import { Injectable } from '@angular/core';
import FormModel from './FormModel';

@Injectable({
  providedIn: 'root'
})
export default class FormService {
  inputs: FormModel[];

  getInputs(): FormModel[] {
    return this.inputs;
  }

  setInputs(inputs): void {
    this.inputs = inputs;
  }
}
