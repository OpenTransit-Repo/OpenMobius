import {scoop_api_token, scoop_api_token_response} from "../types/token";
import {scoop_api_scope} from "../types/scope";

export async function post_token(grant_type: string, scope: Array<scoop_api_scope>, base_url: string, authorization_header: string): Promise<scoop_api_token> {
    let f = await fetch(`${base_url}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": authorization_header
        },
        body: new URLSearchParams({
            grant_type: grant_type,
            scope: scope.join(" ")
        }).toString()
    });
    if (f.status !== 201)
        throw new Error("Failed to get access_token from the scoop API : Api returned " + f.status + " status code")
    let j: scoop_api_token_response = await f.json();
    return {
        access_token: j.access_token,
        expiration_date: (new Date((new Date()).getTime() + (j.expires_in * 1000))).toISOString(),
        expires_in: j.expires_in,
        scopes: j.scope.split(' ').map((el): scoop_api_scope => {return el as scoop_api_scope}),
        token_type: j.token_type
    }
}