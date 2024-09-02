import {scoop_api_stop_response, scoop_api_stop} from "../types/stop";

export async function get_stop(
    stop_id: string,
    base_url: string,
    authorization_header: string
): Promise<scoop_api_stop> {
    const f = await fetch(`${base_url}/stops/${stop_id}`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    if (f.status !== 200)
        throw new Error(`This stop doesn't exists or isn't allowed`);
    const j: scoop_api_stop_response = await f.json();
    return {
        stop_id: j.stop_id,
        name: j.name,
        position: {
            latitude: j.lat,
            longitude: j.lng
        },
        network_id: j.network_id
    }
}