import '../scss/main.scss';

class Messenger {
  constructor(message) {
    this.message = message;
  }

  logMe() {
    return this.message;
  }
}

const test = new Messenger('Hello World');

console.log(test.logMe());