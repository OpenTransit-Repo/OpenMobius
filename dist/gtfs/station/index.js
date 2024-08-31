"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.station = void 0;
const getAllStations_1 = require("./getAllStations");
const getBoardingIDs_1 = require("./getBoardingIDs");
const getDepositaires_1 = require("./getDepositaires");
const getNearest_1 = require("./getNearest");
const getStationInfo_1 = require("./getStationInfo");
const remindStations_1 = require("./remindStations");
exports.station = {
    getAllStations: getAllStations_1.getAllStations,
    getBoardingIDs: getBoardingIDs_1.getBoardingIDs,
    getDepositaires: getDepositaires_1.getDepositaires,
    getNearest: getNearest_1.getNearest,
    getStationInfo: getStationInfo_1.getStationInfo,
    remindStations: remindStations_1.remindStations
};
