chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    const type = request.type
    const $input = $(":focus")
    const fail = () => {
        sendResponse(false)
    }

    if(!$input) {
        fail()
        return
    }

    const tagname = $input[0].tagName.toLowerCase()
    const input_type = ($input.attr("type") || "").toLowerCase()

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
        const raw_value = $(":focus").val() || ""
        sendResponse({raw_value: raw_value})
    } else if(type === "send_result"){
        // 変換後の値をセットする
        $(":focus").val(request.result)
        sendResponse(true)
    }

})