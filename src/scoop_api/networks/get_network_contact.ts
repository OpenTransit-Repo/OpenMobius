import {scoop_api_network_contact, scoop_api_network_contact_response} from "../types/network";
import {html_to_text} from "../../utils/html_parser";

export async function get_network_contact(id: number, base_url: string, authorization_header: string):Promise<scoop_api_network_contact> {
    let f = await fetch(`${base_url}/networks/${id}/contact`, {
        method: "GET",
        headers: {
            "Authorization": authorization_header
        }
    });
    if (f.status !== 200)
        throw new Error("This network doesn't exists or isn't allowed")
    let j: scoop_api_network_contact_response = await f.json();
    return {
        id: j.id,
        phone: j.phone,
        opening_hours: {
            html: j.opening_hours,
            text: html_to_text(j.opening_hours)
        },
        details: {
            html: j.details,
            text: html_to_text(j.details)
        },
        created_at: new Date(j.created_at),
        updated_at: new Date(j.updated_at),
        network_id: j.network_id,
        footer: {
            html: j.webview,
            text: html_to_text(j.webview)
        }
    }
}