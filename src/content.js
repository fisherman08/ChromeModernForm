chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    const type = request.type

    if(type === "get_raw_value"){
        // 現在の入力値を返す
        const raw_value = $(":focus").val() || ""
        sendResponse({raw_value: raw_value})
    } else if(type === "send_result"){
        // 変換後の値をセットする
        $(":focus").val(request.result)
        sendResponse(true)
    }

})