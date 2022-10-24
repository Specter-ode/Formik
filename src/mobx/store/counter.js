const { makeAutoObservable } = require('mobx');

class Counter {
  count = 0;
  timer = 50;
  constructor() {
    makeAutoObservable(this);
  }

  inc() {
    this.count = this.count + 1;
    console.log('inc: ', this.count);
  }
  dec() {
    this.count = this.count - 1;
    console.log('dec: ', this.count);
  }
  get total() {
    return 'total = ' + (this.count + this.timer);
  }
}

export default new Counter();
