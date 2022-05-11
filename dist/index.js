"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDark = void 0;
function isDark() {
    return (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
}
exports.isDark = isDark;
