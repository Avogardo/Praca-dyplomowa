import FormTypes from './FormTypes';

export default class FormModel {
  constructor(
   public type: FormTypes = FormTypes.Text,
   public text: string | number | boolean = 'input',
   public action = (): void => { console.log('modified'); },
  ) {
  }
}
