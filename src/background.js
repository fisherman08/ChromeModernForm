import AddressModernizer from "./addressModernizer"

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Modernize my inputs",
        contexts: ["editable"],
        id: "context1",
        type: "normal"
    })

    chrome.contextMenus.onClicked.addListener(function(info, tab) {


        chrome.tabs.sendMessage(tab.id, {
                "type" : "get_raw_value"
            },
            {},
            function(response){
                const raw_value = response.raw_value || ""
                const replaced = AddressModernizer.modernize(raw_value)
                chrome.tabs.sendMessage(tab.id, {
                    "type" : "send_result",
                    "result": replaced
                })
            }
        )
    })

})
