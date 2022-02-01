import {SWAPI_PEOPLE, SWAPI, HTTPS, GUIDE_IMG_EXTENSION, URL_IMG_PERSON} from "../constants/constants";

export const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI + category, '')
        .replace(/\//g, '');
    return id;
}

export const getImage = (id, category) => `${category}/${id + GUIDE_IMG_EXTENSION}`