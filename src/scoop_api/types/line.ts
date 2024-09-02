export type scoop_api_line_response = {
    id: number,
    slug: string,
    name: string,
    color: string,
    description: string | null,
    active: number,
    order: number,
    created_at: string,
    updated_at: string,
    network_id: number
}

export type scoop_api_line = {
    id: number,
    slug: string,
    name: string,
    color: string,
    description: string | null,
    active: boolean,
    order: number,
    created_at: Date,
    updated_at: Date,
    network_id: number
}