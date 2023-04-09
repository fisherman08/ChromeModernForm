import AddressModernizer from "./addressModernizer"

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const input = document.querySelector(":focus") as HTMLInputElement;

    if (!input) {
        sendResponse("no focused input found");
        return;
    }

    const tagName = input.tagName.toLowerCase();
    const inputType = (input.getAttribute("type") || "").toLowerCase();

    if (tagName !== "textarea" && tagName !== "input") {
        sendResponse("focused element is not an input");
        return;
    }

    if (tagName === "input" && inputType !== "text" && inputType !== "password"){
        sendResponse("focused element is not an input");
        return;
    }

    const rawValue = input.value || "";
    const replaced = AddressModernizer.modernize(rawValue);
    input.value = replaced;
    sendResponse(`replaced ${rawValue} with ${replaced}`);
});