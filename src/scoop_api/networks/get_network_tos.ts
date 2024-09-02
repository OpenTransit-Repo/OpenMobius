import {scoop_api_network_tos, scoop_api_network_tos_response} from "../types/network";
import {html_to_text} from "../../utils/html_parser";

export async function get_network_tos(id: number, base_url: string, authorization_header: string):Promise<scoop_api_network_tos> {
    let f = await fetch(`${base_url}/networks/${id}/tos`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    if (f.status !== 200)
        throw new Error("This network doesn't exists or isn't allowed")
    let j: scoop_api_network_tos_response = await f.json();
    return {
        id: j.id,
        tos: {
            html: j.tos,
            text: html_to_text(j.tos)
        },
        created_at: new Date(j.created_at),
        updated_at: new Date(j.updated_at),
        network_id: j.network_id
    }
}