chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'getHeadings.js' });
  }
);


//listen for sendMessage from getHeadings
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('the first term from getHeadings ', request.arr[0]);

    var cx = '006093038672231679913:0iime5eaerc';
    //do an AJAX request to our custom search engine and return the url to makeTabs

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?&cx=006093038672231679913:0iime5eaerc&key=AIzaSyAqiP2UZ4VHCc_SQHGvCbvie-6SinCFHfA&q=bananas', false);
    xhr.send();

    if (xhr.status === 200) {
     //parse responsText to JSON
     var responseObj = JSON.parse(xhr.responseText);
     var linkString = responseObj.items[0].link;

     //pass link value to makeTabs
     makeTab(linkString);

    }

    // xhr.onload = function () {
    //   if (xhr.readystate === 4) {
    //     console.log('very gotten on the onload');
    //     if (xhr.status === 200) {
    //       console.log('responseText is ', xhr.responseText);
    //     } else {
    //       console.error('errorzz ', xhr.responseText);
    //     }
    //   }

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
