import {SWAPI_PLANETS, SWAPI, HTTPS, GUIDE_IMG_EXTENSION} from "../constants/constants";

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI + category, '')
        .replace(/\//g, '');
    return id;
}

export const getPlanetId = url => getId(url, SWAPI_PLANETS)
export const getPlanetImage = (id, category) => `${category}/${id + GUIDE_IMG_EXTENSION}`