const HomePage = require('../pages/homePage');
const assert = require('assert');

const homePage = new HomePage();

describe('User', () => {
  beforeEach(() => {
    homePage.visit('https://www.google.com/');
  });

  it('should be able to navigate to the home page', () => {
    assert(homePage.getUrl().includes('www.google.com'));
  });

  it('should be able to search for a text in the home page', () => {
    homePage.search('Selenium');
    assert(homePage.hasText('www.selenium.dev'));
  });
});
