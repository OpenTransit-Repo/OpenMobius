import {scoop_api_network} from "../types/network";

export async function get_network(id: number, base_url: string, authorization_header: string):Promise<scoop_api_network> {
    let f = await fetch(`${base_url}/networks/${id}`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    if (f.status !== 200)
        throw new Error("This network doesn't exists or isn't allowed")
    let j: scoop_api_network = await f.json();
    return j;
}