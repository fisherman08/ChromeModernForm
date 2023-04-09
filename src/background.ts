chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage("exec_modernize"),
        contexts: ["editable"],
        id: "context1",
        type: "normal"
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(
        tab.id, 
        { "type" : "request_replace" },
        {},
        response => console.log(response)
    );
});