const HomePage = require('../pages/homePage');
const Page = require('../pages/basePage');
const assert = require('assert');

describe('User', () => {
  beforeEach(() => {
    Page.visit('https://www.google.com/');
  });

  it('should be able to navigate to the home page', () => {
    assert(Page.getUrl().includes('www.google.com'));
  });

  it('should be able to search for a text in the home page', () => {
    HomePage.search('Selenium');
    assert(Page.hasText('www.selenium.dev'));
  });
});
