"use strict";
//TODO: Implement /feed/checkversion/get.json
//API documentation : http://catp-angouleme.airweb.fr/feed/api/
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
async function get(appVersion, os, gtfs_url) {
    let f = await fetch(`${gtfs_url}/checkversion/get.json?appVersion=${appVersion}&os=${os}`);
    if (f.status !== 200)
        throw new Error("Failed to get checkversion from the GTFS API : Api returned " + f.status + " status code");
    let j = await f.json();
    return {
        update_available: j.response.updateAvailable === 1,
        update_required: j.response.updateRequired === 1,
        update_uri: j.response.updateUri
    };
}
