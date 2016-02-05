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
      xhr.onreadystatechange = parseResponseAndMakeTab;
      xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?&cx=006093038672231679913:0iime5eaerc&key=AIzaSyAqiP2UZ4VHCc_SQHGvCbvie-6SinCFHfA&q=' + searchTerm, true);
      xhr.send();

      function parseResponseAndMakeTab () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            //parse responseText string
            var responseObj = JSON.parse(xhr.responseText);

            //grab first URL in the items array. TODO: make helper fn to get random link from item;
            var linkString = responseObj.items[0].link;

            makeTab(linkString);
          } else {
            console.error('Error: cannot GET ' + xhr.status);
          }
        }
      }
    });
});

//make a single tab from link string
function makeTab(linkString) {
    chrome.tabs.create({ url: linkString});
}
