function removePriorityListing() {
	var parent = document.getElementById('SearchListings');
	var childs = parent.children;

	while(true) {
		if(childs[0].className == 'col-sm-12 listingHeadingNewSRP ') {
			break;
		} else {
			parent.removeChild(childs[0]);
		}
	}
}

removePriorityListing();

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === 'TabChange') {
			removePriorityListing();
		}
	}
)
