// Called with every new instance of chrome. 
function checkUrlForFacebook(tabId, changeInfo, tab) {
  // Check if the address contains facebook URL;
  if (tab.url.indexOf(".facebook.com") > -1) {
  //show the page action.
    chrome.pageAction.show(tabId);
	}		    
	
	if (tab.url.indexOf("&theater") > -1) {
		if (localStorage.myMode == "theaterless") {
			var currentUrl = tab.url;
			chrome.tabs.update(tab.id, {url: currentUrl.replace("&theater","")});
		}
	}
};
	
function setModeFb (modeFb) {
	localStorage.myMode = modeFb;
	//bring selected tab infront to close the popup page.
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, { selected: true } )
  });
	
};
