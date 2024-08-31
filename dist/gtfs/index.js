"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gtfs = void 0;
const checkversion_1 = require("./checkversion");
const config_1 = require("./config");
const forms_1 = require("./forms");
const horaire_1 = require("./horaire");
const info_1 = require("./info");
const itinerary_1 = require("./itinerary");
const line_1 = require("./line");
const nosligne_1 = require("./nosligne");
const plan_1 = require("./plan");
const poi_1 = require("./poi");
const realtime_1 = require("./realtime");
const siri_1 = require("./siri");
const station_1 = require("./station");
const terms_1 = require("./terms");
exports.gtfs = {
    checkversion: checkversion_1.checkversion,
    config: config_1.config,
    forms: forms_1.forms,
    horaire: horaire_1.horaire,
    info: info_1.info,
    itinerary: itinerary_1.itinerary,
    line: line_1.line,
    nosligne: nosligne_1.nosligne,
    plan: plan_1.plan,
    poi: poi_1.poi,
    realtime: realtime_1.realtime,
    siri: siri_1.siri,
    station: station_1.station,
    terms: terms_1.terms
};
