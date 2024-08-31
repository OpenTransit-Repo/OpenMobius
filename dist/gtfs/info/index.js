"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const getContact_1 = require("./getContact");
const getEnterprise_1 = require("./getEnterprise");
const getMentionsLegales_1 = require("./getMentionsLegales");
const getNewsApp_1 = require("./getNewsApp");
const getNewsSite_1 = require("./getNewsSite");
const getPriceListApp_1 = require("./getPriceListApp");
const getPriceListSite_1 = require("./getPriceListSite");
const getTrafficInfos_1 = require("./getTrafficInfos");
exports.info = {
    getContact: getContact_1.getContact,
    getEnterprise: getEnterprise_1.getEnterprise,
    getMentionsLegales: getMentionsLegales_1.getMentionsLegales,
    getNewsApp: getNewsApp_1.getNewsApp,
    getNewsSite: getNewsSite_1.getNewsSite,
    getPriceListApp: getPriceListApp_1.getPriceListApp,
    getPriceListSite: getPriceListSite_1.getPriceListSite,
    getTrafficInfos: getTrafficInfos_1.getTrafficInfos
};
