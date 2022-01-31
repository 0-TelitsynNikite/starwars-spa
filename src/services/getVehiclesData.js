import {SWAPI ,SWAPI_VEHICLES, HTTPS, GUIDE_IMG_EXTENSION} from "../constants/constants";

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI + category, '')
        .replace(/\//g, '');
    return id;
}

export const getVehicleId = url => getId(url, SWAPI_VEHICLES)
export const getVehicleImage = (id, category) => `${category}/${id + GUIDE_IMG_EXTENSION}`