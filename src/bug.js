export class Bug {
  constructor() {
    this._foo();
    this._bar();
  }
  _foo() {
    console.log('foo');
  }
  _bar() {
    console.log('bar');
  }
}
