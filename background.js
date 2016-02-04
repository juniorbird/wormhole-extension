chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'getHeadings.js' });
  }
);

//listen for sendMessage from getHeadings
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('request from getheadings ', request);
    console.log('the sender is ', sender);
    makeTabsFromArray(request.arr)
  });


//take return from getHeadings.js and generate tabs from it.
function makeTabsFromArray(arrayOfSearchTermsStrings) {
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
    chrome.tabs.create({ url: "http://www.google.com/#q=" + arrayOfSearchTermsStrings[i], windowId: 1 });
  }
}
