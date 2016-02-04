function getHeadings() {

  var headingLevels = ['h1', 'h2','h3'];
  var thisLevel;
  var headings = [];

  headingLevels.forEach(function(element, index, array) {
    thisLevel = document.getElementsByTagName(element);
    // console.log(thisLevel);
    // Restricted to doing this because this is an HTML collection
    // We could coerce to an array, but then we'd lose DOM methods on the contents
    // Besides, Chrome likes for loops, speed-wise
    for (var i = 0; i < thisLevel.length; i++) {
      // console.log(thisLevel[i].textContent);
      headings.push(thisLevel[i].textContent);
    }
  });

  return headings;
}


//sends Message from content to background so that makeTabs can get the array
chrome.runtime.sendMessage({arr: getHeadings()}, function (response) {
  console.log('response in content is ', response);
});
