import FormTypes from './FormTypes';

export default class FormModel {
  constructor(
    type = FormTypes.text,
    text = 'input',
    action = () => { console.log('modified'); },
  ) {
    this.type = type;
    this.text = text;
    this.action = action;
  }
}
