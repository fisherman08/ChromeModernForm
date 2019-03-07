chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    const type = request.type
    const input = document.querySelector(":focus")
    const fail = () => {
        sendResponse(false)
    }

    if(!input) {
        fail()
        return
    }

    const tagname = input.tagName.toLowerCase()
    const input_type = (input.getAttribute("type") || "").toLowerCase()

    if(
        tagname !== "textarea" &&
        (
            tagname !== "input" ||
            (
                tagname === "input" &&
                input_type !== "text" &&
                input_type !== "password"
            )
        )
    ){
        fail()
        return
    }


    if(type === "get_raw_value"){
        // 現在の入力値を返す
        const raw_value = input.value || ""
        sendResponse({raw_value: raw_value})
    } else if(type === "send_result"){
        // 変換後の値をセットする
        input.value = request.result || ""
        sendResponse(true)
    }

})