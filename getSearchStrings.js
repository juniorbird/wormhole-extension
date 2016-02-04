// console.log(getHeadings());

// var headingsToSearchFor = getHeadings();

var endpoint = 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=';
var referer = 'http://wadearmstrong.com';

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function cb(txt) {
	console.log(txt);
}

testURL = endpoint + 'javascript';

httpGetAsync(testURL, cb);

// Google API Key AIzaSyAqiP2UZ4VHCc_SQHGvCbvie-6SinCFHfA
