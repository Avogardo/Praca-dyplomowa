export default class ButtonModel {
  constructor(
    key = String(Math.random()),
    event = () => {},
    text = 'Label',
  ) {
    this.key = key;
    this.event = event;
    this.text = text;
  }
}
