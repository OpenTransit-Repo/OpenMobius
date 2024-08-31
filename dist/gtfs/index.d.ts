export declare const gtfs: {
    checkversion: {
        get: typeof import("./checkversion/get").get;
    };
    config: {
        getTheme: typeof import("./config/getTheme").getTheme;
    };
    forms: {
        getForms: typeof import("./forms/getForms").getForms;
        getFormsList: typeof import("./forms/getFormsList").getFormsList;
        sendResponse: typeof import("./forms/sendResponse").sendResponse;
    };
    horaire: {
        getHoraire: typeof import("./horaire/getHoraire").getHoraire;
    };
    info: {
        getContact: typeof import("./info/getContact").getContact;
        getEnterprise: typeof import("./info/getEnterprise").getEnterprise;
        getMentionsLegales: typeof import("./info/getMentionsLegales").getMentionsLegales;
        getNewsApp: typeof import("./info/getNewsApp").getNewsApp;
        getNewsSite: typeof import("./info/getNewsSite").getNewsSite;
        getPriceListApp: typeof import("./info/getPriceListApp").getPriceListApp;
        getPriceListSite: typeof import("./info/getPriceListSite").getPriceListSite;
        getTrafficInfos: typeof import("./info/getTrafficInfos").getTrafficInfos;
    };
    itinerary: {
        getItineraries: typeof import("./itinerary/getItineraries").getItineraries;
    };
    line: {
        getAllLines: typeof import("./line/getAllLines").getAllLines;
        getLine: typeof import("./line/getLine").getLine;
        getLineSections: typeof import("./line/getLineSections").getLineSections;
        getLinesGeoJson: typeof import("./line/getLinesGeoJson").getLinesGeoJson;
        getStationLines: typeof import("./line/getStationLines").getStationLines;
    };
    nosligne: {
        getNosLigne: typeof import("./nosligne/getNosLigne").getNosLigne;
        getNosLigneList: typeof import("./nosligne/getNosLigneList").getNosLigneList;
    };
    plan: {
        getPlans: typeof import("./plan/getPlans").getPlans;
    };
    poi: {
        getPOI: typeof import("./poi/getPOI").getPOI;
    };
    realtime: {
        getRealtime: typeof import("./realtime/getRealtime").getRealtime;
        getRealtimeWithErrors: typeof import("./realtime/getRealtimeWithErrors").getRealtimeWithErrors;
    };
    siri: {
        getSIRI: typeof import("./siri/getSIRI").getSIRI;
        getSIRIWithErrors: typeof import("./siri/getSIRIWithErrors").getSIRIWithErrors;
    };
    station: {
        getAllStations: typeof import("./station/getAllStations").getAllStations;
        getBoardingIDs: typeof import("./station/getBoardingIDs").getBoardingIDs;
        getDepositaires: typeof import("./station/getDepositaires").getDepositaires;
        getNearest: typeof import("./station/getNearest").getNearest;
        getStationInfo: typeof import("./station/getStationInfo").getStationInfo;
        remindStations: typeof import("./station/remindStations").remindStations;
    };
    terms: {
        getTermOfUse: typeof import("./terms/getTermOfUse").getTermOfUse;
    };
};
