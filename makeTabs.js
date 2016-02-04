//make tabs
makeTabsFromArray(getHeadings());



function makeTabsFromArray(arrayOfSearchTermsStrings) {
  console.log('array at i ', arrayOfSearchTermsStrings[i]);
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
    chrome.tabs.create({ url: "http://www.google.com/#q=" + term, windowId: i + 1 });
  }
}
