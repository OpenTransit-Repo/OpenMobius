"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siri = void 0;
const getSIRI_1 = require("./getSIRI");
const getSIRIWithErrors_1 = require("./getSIRIWithErrors");
exports.siri = {
    getSIRI: getSIRI_1.getSIRI,
    getSIRIWithErrors: getSIRIWithErrors_1.getSIRIWithErrors
};
