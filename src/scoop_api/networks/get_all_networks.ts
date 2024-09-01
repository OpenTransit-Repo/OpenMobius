import {scoop_api_network} from "../types/network";

export async function get_all_networks(base_url: string, authorization_header: string):Promise<scoop_api_network[]> {
    let f = await fetch(`${base_url}/networks`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    if (f.status !== 200)
        throw new Error("Failed to get networks from the scoop API : Api returned " + f.status + " status code")
    let j: scoop_api_network[] = await f.json();
    return j;
}