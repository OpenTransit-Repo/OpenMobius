"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line = void 0;
const getAllLines_1 = require("./getAllLines");
const getLine_1 = require("./getLine");
const getLineSections_1 = require("./getLineSections");
const getLinesGeoJson_1 = require("./getLinesGeoJson");
const getStationLines_1 = require("./getStationLines");
exports.line = {
    getAllLines: getAllLines_1.getAllLines,
    getLine: getLine_1.getLine,
    getLineSections: getLineSections_1.getLineSections,
    getLinesGeoJson: getLinesGeoJson_1.getLinesGeoJson,
    getStationLines: getStationLines_1.getStationLines
};
