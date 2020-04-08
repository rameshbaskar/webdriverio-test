class BasePage {
  constructor() {
    this.defaultTimeOut = 20000; // Default timeout waiting for element to appear (in ms)
    this.defaultPollInterval = 1000; // Default polling interval (in ms)
  }

  visit(url) {
    console.log(`Navigating to URL: ${url}`);
    browser.url(url);
  }

  getUrl() {
    return browser.getUrl();
  }

  pressKey(keyValue) {
    console.log(`Simulating key stroke ${keyValue}`);
    browser.keys(keyValue);
  }

  setText(elIdentifier, text) {
    console.log(`Setting value ${text} into element ${elIdentifier}`);
    $(elIdentifier).setValue(text);
  }

  click(elIdentifier) {
    console.log(`Clicking on element ${elIdentifier}`);
    $(elIdentifier).click();
  }

  selectByText(elIdentifier, text) {
    console.log(`Selecting by visible text ${text} from dropdown ${elIdentifier}`);
    $(elIdentifier).selectByVisibleText(text);
  }

  selectByValue(elIdentifier, value) {
    console.log(`Selecting by value ${value} from dropdown ${elIdentifier}`);
    $(elIdentifier).selectByAttribute('value', value);
  }

  isElementExists(elIdentifier, reverseFlag = false) {
    console.log(`Checking if element ${elIdentifier} exists`);
    return $(elIdentifier).waitForExist({
      timeout: this.defaultTimeOut,
      reverse: reverseFlag,
      interval: this.defaultPollInterval
    });
  }

  isElementNotExists(elIdentifier) {
    console.log(`Checking if element ${elIdentifier} does not exist`);
    return this.isElementExists(elIdentifier, true);
  }

  hasText(text) {
    console.log(`Checking if text ${text} exists in the page`);
    return browser.getPageSource().includes(text);
  }
}

module.exports = BasePage;
