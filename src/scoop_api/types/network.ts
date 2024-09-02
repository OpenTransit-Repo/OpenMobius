export type scoop_api_network = {
    id: number,
    slug: string,
    name: string,
    description: string,
    website: string,
    gtfs: string,
    active: number,
    contact_id: number,
    tos_id: number
}

export type scoop_api_network_contact_response = {
    id: number,
    phone: string,
    opening_hours: string,
    details: string,
    created_at: string,
    updated_at: string,
    network_id: number,
    webview: string
}

export type scoop_api_network_contact = {
    id: number,
    phone: string,
    opening_hours: {
        html: string,
        text: string,
    },
    details: {
        html: string,
        text: string,
    },
    created_at: Date,
    updated_at: Date,
    network_id: number,
    footer: {
        html: string,
        text: string,
    }
}