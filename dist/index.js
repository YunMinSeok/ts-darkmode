"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingular = exports.getPlural = void 0;
var pluralize = require("pluralize");
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
function getSingular(str) {
    return pluralize.singular(str);
}
exports.getSingular = getSingular;
