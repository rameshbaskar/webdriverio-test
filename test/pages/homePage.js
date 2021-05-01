const Page = require('./basePage');

// Elements
const tbSearch = `input[name='q']`;

function search(text) {
  $(tbSearch).setValue(text);
  Page.pressKey('Enter');
}

module.exports = {
  search
}
