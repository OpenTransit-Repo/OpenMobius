import {scoop_api_scope} from "./scope";

export type scoop_api_token_response = {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string
}

export type scoop_api_token = {
    access_token: string,
    token_type: string,
    expires_in: number,
    expiration_date: string,
    scopes: Array<scoop_api_scope>
}