

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Modernize my inputs",
        contexts: ["editable"],
        id: "context1",
        type: "normal"
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {

        chrome.tabs.sendMessage(tab.id, {
                "type" : "request_replace"
            }
        );
    });

});
