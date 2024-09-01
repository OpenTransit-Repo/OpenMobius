//TODO: Implement /feed/checkversion/get.json
//API documentation : http://catp-angouleme.airweb.fr/feed/api/

import {GTFS_checkversion_get, GTFS_checkversion_get_reponse} from "./types";

export async function get (appVersion: string, os: string, gtfs_url: string): Promise<GTFS_checkversion_get> {
    let f = await fetch(`${gtfs_url}/checkversion/get.json?appVersion=${appVersion}&os=${os}`);
    if (f.status !== 200)
        throw new Error("Failed to get checkversion from the GTFS API : Api returned " + f.status + " status code")
    let j: GTFS_checkversion_get_reponse = await f.json();
    return {
        update_available: j.response.updateAvailable === 1,
        update_required: j.response.updateRequired === 1,
        update_uri: j.response.updateUri
    }
}