

class ContextMenu {
    constructor(){
        this.menu_item = {};

        this.action = (info, tab) => {
            chrome.tabs.sendMessage(tab.id, {
                    "type" : "request_replace"
                },
                {

                },
                function (response) {
                    if(typeof response === "string"){
                        console.log(response);
                    }
                }
            );
        };

        chrome.contextMenus.onClicked.addListener(function (info, tab) {
            menu.action(info, tab);
        });
    }

    set_menu(menu_in){
        menu.menu_item = menu_in;
    }

    create(){
        chrome.contextMenus.create(menu.menu_item);
    }

};

const menu = new ContextMenu();
menu.set_menu({
             title: chrome.i18n.getMessage("exec_modernize"),
             contexts: ["editable"],
             id: "context1",
             type: "normal"
         });


chrome.runtime.onInstalled.addListener(menu.create);