export type GTFS_checkversion_get_reponse = {
    status: string,
    time: number,
    exectime: number,
    response: {
        updateAvailable: number,
        updateRequired: number,
        updateUri: string
    }
}

export type GTFS_checkversion_get = {
    update_available: boolean,
    update_required: boolean,
    update_uri: string
}