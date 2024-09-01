import {gtfs} from "./gtfs";
import {scoop_api} from "./scoop_api";
import {scoop_api_scope} from "./scoop_api/types/scope";
import {scoop_api_token} from "./scoop_api/types/token";
import {scoop_api_network} from "./scoop_api/types/network";

const scoop_api_base_url = "https://api.scoop.airweb.fr";
const scoop_api_authorization_header = "Basic c2Nvb3AuaW9zLnN0Z2E6OUJMYzJxWXBGWTVKVkZVUzlQcVRNMzdUc2Q0ODV5"

class OpenMobius {
    private scoop_api_token: scoop_api_token
    private scoop_api_network?: scoop_api_network;

    private generate_authorization_header(): string {
        return `Bearer ${this.scoop_api_token.access_token}`;
    }

    public scoop_api = {
        ...scoop_api,
        auth: {
            ...scoop_api.auth,
            post_token: (grant_type: string, scope: Array<scoop_api_scope>) =>
                scoop_api.auth.post_token(grant_type, scope, scoop_api_base_url, scoop_api_authorization_header)
        },
        networks: {
            get_all_networks: () => scoop_api.networks.get_all_networks(
                scoop_api_base_url,
                this.generate_authorization_header()
            ),
            get_network: (network_id: number) => scoop_api.networks.get_network(
                network_id,
                scoop_api_base_url,
                this.generate_authorization_header()
            ),
            get_network_contact: (network_id: number) => scoop_api.networks.get_network_contact(
                network_id,
                scoop_api_base_url,
                this.generate_authorization_header()
            ),
            get_network_tos: (network_id: number) => scoop_api.networks.get_network_tos(
                network_id,
                scoop_api_base_url,
                this.generate_authorization_header()
            )
        }
    }

    public gtfs = {
        ...gtfs,
        checkversion: {
            ...gtfs.checkversion,
            get: (appVersion: string, os: string) => gtfs.checkversion.get(appVersion, os, this.scoop_api_network.gtfs)
        }
    };

    export_token(): scoop_api_token {
        return this.scoop_api_token;
    }

    async init() {
        this.scoop_api_token = await this.scoop_api.auth.post_token(
            "client_credentials",
            [
                "scoop.ad.read",
                "scoop.line.read",
                "scoop.map.read",
                "scoop.media.read",
                "scoop.news.read",
                "scoop.poi.read",
                "scoop.price.read",
                "scoop.stop.read",
                "scoop.traffic.read",
                "scoop.network.read"
            ]
        );
        this.scoop_api_network = (await this.scoop_api.networks.get_all_networks())[0];
    }

    constructor() {}
}

export {OpenMobius};