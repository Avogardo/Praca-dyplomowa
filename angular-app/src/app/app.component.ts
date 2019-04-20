import { Component, OnInit } from '@angular/core';
import FormModel from './form/FormModel';
import FormTypes from './form/FormTypes';
import FormService from './form/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  constructor(private formService: FormService) {
  }

  ngOnInit() {
    const inputs: FormModel[] = [
      new FormModel(FormTypes.Text, 'This is an input'),
      new FormModel(FormTypes.Number, 0),
      new FormModel(FormTypes.Submit, 'Submit', this.onSubmit),
    ];

    this.formService.setInputs(inputs);
  }

  onSubmit = (): void => {
    const inputs = this.formService.getInputs();
    console.log(inputs[0].text, inputs[1].text);
  }
}
