chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    chrome.tabs.sendMessage(currentTab.id, {"message": "clicked_browser_action"})
  });

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'getHeadings.js' });
});

chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (req.message === 'open_new_tab') {
    console.log('it good');
    chrome.tabs.create({url: "http://www.codesmith.io"});
  }
});

//
function makeTabsFromArray(arrayOfSearchTermsStrings) {
  console.log('array at i ', arrayOfSearchTermsStrings[i]);
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
    chrome.tabs.create({ url: "http://www.google.com/#q=" + term, windowId: i + 1 });
  }
}
