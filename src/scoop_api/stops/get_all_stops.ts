import {scoop_api_stop_response, scoop_api_stop} from "../types/stop";

export async function get_all_stops(
    base_url: string,
    authorization_header: string
): Promise<Array<scoop_api_stop>> {
    const f = await fetch(`${base_url}/stops`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    const j: scoop_api_stop_response[] = await f.json();
    let response: Array<scoop_api_stop> = [];
    j.forEach((stop) => {
        response.push({
            name: stop.name,
            network_id: stop.network_id,
            position: {
                latitude: stop.lat,
                longitude: stop.lng
            },
            stop_id: stop.stop_id
        })
    });
    return response;
}