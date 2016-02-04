chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'getHeadings.js' });
  }
);

//Listens for Array of search terms from getHeadings script. 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //for each search term, do an AJAX request to our custom search engine
    //parse the responseText, grab the link at items and make a new tab at that URL
    request.arr.forEach(function (searchTerm) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?&cx=006093038672231679913:0iime5eaerc&key=AIzaSyAqiP2UZ4VHCc_SQHGvCbvie-6SinCFHfA&q=' + searchTerm, false);
      xhr.send();
      if (xhr.status === 200) {
        //parse responsText to JSON
        var responseObj = JSON.parse(xhr.responseText);
        var linkString = responseObj.items[0].link;

        //pass link value to makeTabs
        makeTab(linkString);
      }
    });
});

//take return from getHeadings.js and generate tabs from it.
function makeTabsFromArray(arrayOfSearchTermsStrings) {
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
    chrome.tabs.create({ url: "http://www.google.com/#q=" + arrayOfSearchTermsStrings[i], windowId: 1 });
  }
}


//make a single tab from link string (for testing)
function makeTab(linkString) {
    chrome.tabs.create({ url: linkString});
}
