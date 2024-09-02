import {position} from "../../types/position";

export type scoop_api_stop_response = {
    stop_id: string,
    name: string,
    lat: number,
    lng: number,
    network_id: number,
}

export type scoop_api_stop = {
    stop_id: string,
    name: string,
    position: position,
    network_id: number,
}