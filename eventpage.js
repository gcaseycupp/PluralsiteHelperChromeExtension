

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	
	if(request.action=="show"){
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
			
			var id = tabs[0].id;
			alert("show" + id);
			//chrome.pageAction.show(id);//NOT WORKING>>>> NOT SURE WHY....

		});
	}
});

// chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
			
// 			var id = tabs[0].id;
// 			alert("show" + id);
// 			chrome.pageAction.show(id);//NOT WORKING>>>> NOT SURE WHY....

// 		});

	



