chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'getHeadings.js' });
  chrome.tabs.executeScript(null, { file: 'getSearchStrings.js' });
});
