const DEFAULT_TIMEOUT = 20000;
const DEFAULT_POLL_INTERVAL = 1000;

function visit(url) {
  browser.url(url);
}

function getUrl() {
  return browser.getUrl();
}

function pressKey(key) {
  browser.keys(key);
}

function isElementPresent(elIdentifier, reverseFlag = false) {
  return $(elIdentifier).waitForExist({
    timeout: DEFAULT_TIMEOUT,
    reverse: reverseFlag,
    interval: DEFAULT_POLL_INTERVAL
  });
}

function isElementNotPresent(elIdentifier) {
  return isElementPresent(elIdentifier, true);
}

function hasText(text) {
  return browser.getPageSource().includes(text);
}

module.exports = {
  visit,
  getUrl,
  pressKey,
  isElementPresent,
  isElementNotPresent,
  hasText
}
