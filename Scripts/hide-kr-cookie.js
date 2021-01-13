"use strict";

const hideCookieIcon = Object.assign(document.createElement("style"), {
    id: "hideCookieIcon",
    innerHTML: "#onetrust-consent-sdk { display: none !important; }"
});

module.exports = {
    name: "Hide Cookie Icon",
    version: "1.0.0",
    author: "NullDev",
    description: "Adds options to hide the new cookie icon.",
    locations: ["game", "social"],
    settings: {
        hideCookieIcon: {
            name: "Hide Cookie Icon",
            id: "hideCookieIcon",
            cat: "Interface",
            type: "checkbox",
            val: true,
            html: function(){ return clientUtil.genCSettingsHTML(this); },
            set: value => {
                if (value) document.head.appendChild(hideCookieIcon);
                else if (hideCookieIcon.parentElement) hideCookieIcon.remove();
            }
        },
    },
    run: config => {
        if (config.get("hideCookieIcon", true)) {
            document.addEventListener("DOMContentLoaded", () => document.head.appendChild(hideCookieIcon));
        }
    }
};
