export type scoop_api_icon_response = {
    id: number,
    created_at: string,
    updated_at: string,
    image: {
        id: number,
        name: string,
        filename: string,
        url: string,
        mimetype: string,
        created_at: string,
        updated_at: string
    },
    image_id: number,
    network_id: number | null

}

export type scoop_api_icon = {
    id: number,
    created_at: Date,
    updated_at: Date,
    image: {
        id: number,
        name: string,
        filename: string,
        url: string,
        mimetype: string,
        created_at: Date,
        updated_at: Date
    },
    image_id: number,
    network_id: number | null
}