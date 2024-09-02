"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenMobius = void 0;
const gtfs_1 = require("./gtfs");
const scoop_api_1 = require("./scoop_api");
const scoop_api_base_url = "https://api.scoop.airweb.fr";
const scoop_api_authorization_header = "Basic c2Nvb3AuaW9zLnN0Z2E6OUJMYzJxWXBGWTVKVkZVUzlQcVRNMzdUc2Q0ODV5";
class OpenMobius {
    generate_authorization_header() {
        return `Bearer ${this.scoop_api_token.access_token}`;
    }
    export_token() {
        return this.scoop_api_token;
    }
    async init() {
        this.scoop_api_token = await this.scoop_api.auth.post_token("client_credentials", [
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
        ]);
        this.scoop_api_network = (await this.scoop_api.networks.get_all_networks())[0];
    }
    constructor() {
        this.scoop_api = {
            ...scoop_api_1.scoop_api,
            auth: {
                ...scoop_api_1.scoop_api.auth,
                post_token: (grant_type, scope) => scoop_api_1.scoop_api.auth.post_token(grant_type, scope, scoop_api_base_url, scoop_api_authorization_header)
            },
            networks: {
                get_all_networks: () => scoop_api_1.scoop_api.networks.get_all_networks(scoop_api_base_url, this.generate_authorization_header()),
                get_network: (network_id) => scoop_api_1.scoop_api.networks.get_network(network_id, scoop_api_base_url, this.generate_authorization_header()),
                get_network_contact: (network_id) => scoop_api_1.scoop_api.networks.get_network_contact(network_id, scoop_api_base_url, this.generate_authorization_header()),
                get_network_tos: (network_id) => scoop_api_1.scoop_api.networks.get_network_tos(network_id, scoop_api_base_url, this.generate_authorization_header())
            },
            stop: {
                get_all_stops: () => scoop_api_1.scoop_api.stops.get_all_stops(scoop_api_base_url, this.generate_authorization_header()),
                get_stop: (stop_id) => scoop_api_1.scoop_api.stops.get_stop(stop_id, scoop_api_base_url, this.generate_authorization_header())
            }
        };
        this.gtfs = {
            ...gtfs_1.gtfs,
            checkversion: {
                ...gtfs_1.gtfs.checkversion,
                get: (appVersion, os) => gtfs_1.gtfs.checkversion.get(appVersion, os, this.scoop_api_network.gtfs)
            }
        };
    }
}
exports.OpenMobius = OpenMobius;
let openmobius = new OpenMobius();
openmobius.init().then(() => {
    openmobius.scoop_api.stop.get_stop("WyIxMDA5MiIsMzZd").then(console.log);
});
