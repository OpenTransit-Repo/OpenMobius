import {gtfs} from "./gtfs";
import {ScoopApiScope, ScoopApiToken} from "./gtfs/types";

const scoop_api_base_url = "https://api.scoop.airweb.fr";
const scoop_api_authorization_header = "Basic c2Nvb3AuaW9zLnN0Z2E6OUJMYzJxWXBGWTVKVkZVUzlQcVRNMzdUc2Q0ODV5"

class OpenMobius {
    private scoop_api_access_token: string;
    private scoop_api_token_type: string;
    private scoop_api_expiration_date: string;
    private scoop_api_scope: Array<ScoopApiScope>;

    constructor() {
        this.scoop_api_access_token = "";
        this.scoop_api_token_type = "";
        this.scoop_api_expiration_date = new Date().toISOString();
        this.scoop_api_scope = [
            "scoop.ad.read",
            "scoop.line.read",
            "scoop.map.read",
            "scoop.media.read",
            "scoop.news.read",
            "scoop.poi.read",
            "scoop.price.read",
            "scoop.stop.read",
            "scoop.traffic.read"
        ];
    }

    scoop_api_token_get():ScoopApiToken {
        console.log(new Date(this.scoop_api_expiration_date))
        return {
            access_token: this.scoop_api_access_token,
            expiration_date: this.scoop_api_expiration_date,
            expires_in: (new Date(this.scoop_api_expiration_date).getTime() - new Date().getTime()) / 1000,
            scopes: this.scoop_api_scope,
            token_type: this.scoop_api_token_type
        }
    }

    async scoop_api_token_create(): Promise<ScoopApiToken> {
        let f = await fetch(`${scoop_api_base_url}/auth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": scoop_api_authorization_header
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                scope: this.scoop_api_scope.join(" ")
            }).toString()
        });
        if (f.status !== 201) {
            throw new Error("Failed to get access_token from the scoop API : Api returned " + f.status + " status code")
        }
        let j = await f.json();
        let expiration_date = new Date((new Date()).getTime() + (j.expires_in * 1000));

        this.scoop_api_access_token = j.access_token;
        this.scoop_api_token_type = j.token_type;
        this.scoop_api_scope = j.scope.split(" ");
        this.scoop_api_expiration_date = expiration_date.toISOString();
        return {
            access_token: j.access_token,
            token_type: j.token_type,
            expires_in: j.expires_in,
            expiration_date: expiration_date.toISOString(),
            scopes: j.scope.split(" ")
        }
    }

    public gtfs = gtfs;
}

export {OpenMobius};

let openmobius = new OpenMobius();
openmobius.scoop_api_token_create().then(() => {
    console.log(openmobius.scoop_api_token_get())
    setTimeout(() => {
        console.log(openmobius.scoop_api_token_get())
    }, 5000)
})
