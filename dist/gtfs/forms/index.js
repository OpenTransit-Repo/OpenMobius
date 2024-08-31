"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forms = void 0;
const getForms_1 = require("./getForms");
const getFormsList_1 = require("./getFormsList");
const sendResponse_1 = require("./sendResponse");
exports.forms = {
    getForms: getForms_1.getForms,
    getFormsList: getFormsList_1.getFormsList,
    sendResponse: sendResponse_1.sendResponse
};
