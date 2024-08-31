"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realtime = void 0;
const getRealtime_1 = require("./getRealtime");
const getRealtimeWithErrors_1 = require("./getRealtimeWithErrors");
exports.realtime = {
    getRealtime: getRealtime_1.getRealtime,
    getRealtimeWithErrors: getRealtimeWithErrors_1.getRealtimeWithErrors
};
