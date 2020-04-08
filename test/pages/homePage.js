const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.tbSearch = "input[name='q']";
  }

  search(text) {
    console.log(`Searching for text ${text}`);
    super.setText(this.tbSearch, text);
    super.pressKey('Enter');
  }
}

module.exports = HomePage;
