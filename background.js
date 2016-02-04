chrome.browserAction.onClicked.addListener(function(tab) {
  //test run: creates 1 new tab with a search term : bananas
  code: chrome.tabs.create({ url: "http://www.google.com/#q=bananas", windowId: 1 });
});

//
function makeTabsFromArray(arrayOfSearchTermsStrings) {
  console.log('array at i ', arrayOfSearchTermsStrings[i]);
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
    chrome.tabs.create({ url: "http://www.google.com/#q=" + term, windowId: i + 1 });
  }
}
