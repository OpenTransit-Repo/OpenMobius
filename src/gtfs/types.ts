export type ScoopApiScope =
    "scoop.news.read" |
    "scoop.poi.read" |
    "scoop.traffic.read" |
    "scoop.network.read" |
    "scoop.line.read" |
    "scoop.stop.read" |
    "scoop.map.read" |
    "scoop.ad.read" |
    "scoop.media.read" |
    "scoop.price.read";

export type ScoopApiToken = {
    access_token: string,
    token_type: string,
    expires_in: number,
    expiration_date: string,
    scopes: Array<ScoopApiScope>
}