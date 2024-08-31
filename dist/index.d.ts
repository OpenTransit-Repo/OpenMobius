import { ScoopApiToken } from "./gtfs/types";
declare class OpenMobius {
    private scoop_api_access_token;
    private scoop_api_token_type;
    private scoop_api_expiration_date;
    private scoop_api_scope;
    constructor();
    scoop_api_token_get(): ScoopApiToken;
    scoop_api_token_create(): Promise<ScoopApiToken>;
    gtfs: {
        checkversion: {
            get: typeof import("./gtfs/checkversion/get").get;
        };
        config: {
            getTheme: typeof import("./gtfs/config/getTheme").getTheme;
        };
        forms: {
            getForms: typeof import("./gtfs/forms/getForms").getForms;
            getFormsList: typeof import("./gtfs/forms/getFormsList").getFormsList;
            sendResponse: typeof import("./gtfs/forms/sendResponse").sendResponse;
        };
        horaire: {
            getHoraire: typeof import("./gtfs/horaire/getHoraire").getHoraire;
        };
        info: {
            getContact: typeof import("./gtfs/info/getContact").getContact;
            getEnterprise: typeof import("./gtfs/info/getEnterprise").getEnterprise;
            getMentionsLegales: typeof import("./gtfs/info/getMentionsLegales").getMentionsLegales;
            getNewsApp: typeof import("./gtfs/info/getNewsApp").getNewsApp;
            getNewsSite: typeof import("./gtfs/info/getNewsSite").getNewsSite;
            getPriceListApp: typeof import("./gtfs/info/getPriceListApp").getPriceListApp;
            getPriceListSite: typeof import("./gtfs/info/getPriceListSite").getPriceListSite;
            getTrafficInfos: typeof import("./gtfs/info/getTrafficInfos").getTrafficInfos;
        };
        itinerary: {
            getItineraries: typeof import("./gtfs/itinerary/getItineraries").getItineraries;
        };
        line: {
            getAllLines: typeof import("./gtfs/line/getAllLines").getAllLines;
            getLine: typeof import("./gtfs/line/getLine").getLine;
            getLineSections: typeof import("./gtfs/line/getLineSections").getLineSections;
            getLinesGeoJson: typeof import("./gtfs/line/getLinesGeoJson").getLinesGeoJson;
            getStationLines: typeof import("./gtfs/line/getStationLines").getStationLines;
        };
        nosligne: {
            getNosLigne: typeof import("./gtfs/nosligne/getNosLigne").getNosLigne;
            getNosLigneList: typeof import("./gtfs/nosligne/getNosLigneList").getNosLigneList;
        };
        plan: {
            getPlans: typeof import("./gtfs/plan/getPlans").getPlans;
        };
        poi: {
            getPOI: typeof import("./gtfs/poi/getPOI").getPOI;
        };
        realtime: {
            getRealtime: typeof import("./gtfs/realtime/getRealtime").getRealtime;
            getRealtimeWithErrors: typeof import("./gtfs/realtime/getRealtimeWithErrors").getRealtimeWithErrors;
        };
        siri: {
            getSIRI: typeof import("./gtfs/siri/getSIRI").getSIRI;
            getSIRIWithErrors: typeof import("./gtfs/siri/getSIRIWithErrors").getSIRIWithErrors;
        };
        station: {
            getAllStations: typeof import("./gtfs/station/getAllStations").getAllStations;
            getBoardingIDs: typeof import("./gtfs/station/getBoardingIDs").getBoardingIDs;
            getDepositaires: typeof import("./gtfs/station/getDepositaires").getDepositaires;
            getNearest: typeof import("./gtfs/station/getNearest").getNearest;
            getStationInfo: typeof import("./gtfs/station/getStationInfo").getStationInfo;
            remindStations: typeof import("./gtfs/station/remindStations").remindStations;
        };
        terms: {
            getTermOfUse: typeof import("./gtfs/terms/getTermOfUse").getTermOfUse;
        };
    };
}
export { OpenMobius };
