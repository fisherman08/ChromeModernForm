

chrome.contextMenus.create({
    title: "Modernize my inputs",
    contexts: ["editable"],
    id: "context1",
    type: "normal"
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // console.log(info);
    // const selection_text = info.selectionText
    // if(!selection_text) {
    //     return
    // }

    //const result = Replacer.replace(selection_text)

    chrome.tabs.sendMessage(tab.id, {
        "result" : "please"
    },
        {},
        function(response){
            console.log(response);
        }
    )
})