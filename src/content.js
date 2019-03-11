import AddressModernizer from "./addressModernizer"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    const request_type = request.type;
    const input = document.querySelector(":focus");

    if(!input) {
        sendResponse("no focused input found");
        return
    }

    const tagname = input.tagName.toLowerCase();
    const input_type = (input.getAttribute("type") || "").toLowerCase();

    if(
        // textareaでもinput[type=text|password]でもなければ何もしない
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
        sendResponse("focused element is not an input");
        return;
    }

    // 現在の入力値
    const raw_value = input.value || "";

    // 変換
    const replaced_value = AddressModernizer.modernize(raw_value);

    // 書き換え
    input.value = replaced_value;
    sendResponse("'" + raw_value + "' has been converted into '" + replaced_value + "'");

});