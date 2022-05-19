"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Darkmode = /** @class */ (function () {
    function Darkmode(options) {
        var defaultOptions = {
            bottom: "30px",
            right: "30px",
            left: "unset",
            transitionTime: "0.3s",
            backgroundColor: "#121212",
            buttonDarkColor: "#141414",
            buttonLightColor: "#fff",
            content: "",
            saveInCookies: true,
            animation: "scale(100)",
            buttonWidth: "3rem",
            buttonHeight: "3rem",
        };
        options = __assign(__assign({}, defaultOptions), options);
        var css = "\n      .darkmode-wrap {\n        background: ".concat(options.backgroundColor, ";\n        transition: all ").concat(options.transitionTime, " ease;\n        transform: ").concat(options.animation, ";\n      }\n      .darkmode-toggle {\n        background: ").concat(options.buttonDarkColor, ";\n        width: ").concat(options.buttonWidth, ";\n        height: ").concat(options.buttonHeight, ";\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .darkmode-toggle--white {\n        background: ").concat(options.buttonLightColor, ";\n      }\n    ");
        var button = document.createElement("button");
        button.innerHTML = options.content;
        var darkmodeActivated = window.localStorage.getItem("darkmode") === "true";
        if (darkmodeActivated === true) {
            button.classList.add("darkmode-toggle--white");
            document.body.classList.add("darkmode-wrap");
        }
        //add css Style
        var linkElement = document.createElement("link");
        linkElement.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(css));
        document.head.appendChild(linkElement);
        this.button = button;
        this.time = options.transitionTime;
    }
    Darkmode.prototype.showWidget = function () {
        var _this = this;
        var button = this.button;
        var time = parseFloat(this.time) * 1000;
        button.classList.add("darkmode-toggle");
        button.setAttribute("aria-label", "Activate dark mode");
        button.setAttribute("aria-checked", "false");
        button.setAttribute("role", "checkbox");
        button.addEventListener("click", function () {
            var isDarkmode = _this.isActivated();
            if (!isDarkmode) {
                button.setAttribute("disabled", "true");
                setTimeout(function () {
                    button.removeAttribute("disabled");
                }, time);
            }
            else {
                button.setAttribute("disabled", "true");
                setTimeout(function () {
                    button.removeAttribute("disabled");
                }, 1);
            }
            button.classList.toggle("darkmode-toggle--white");
            document.body.classList.toggle("darkmode--activated");
            window.localStorage.setItem("darkmode", (!isDarkmode).toString());
        });
    };
    Darkmode.prototype.toggle = function () {
        var isDarkmode = this.isActivated();
        var button = this.button;
        document.body.classList.toggle("darkmode--activated");
        window.localStorage.setItem("darkmode", (!isDarkmode).toString());
        button.setAttribute("aria-label", "De-activate dark mode");
        button.setAttribute("aria-checked", "true");
    };
    Darkmode.prototype.isActivated = function () {
        return document.body.classList.contains("darkmode--activated");
    };
    return Darkmode;
}());
exports.default = Darkmode;
