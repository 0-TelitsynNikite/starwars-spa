import {SWAPI_PEOPLE, SWAPI, HTTPS, GUIDE_IMG_EXTENSION, URL_IMG_PERSON} from "../constants/constants";

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI + category, '')
        .replace(/\//g, '');
    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImage = (id, category) => `${category}/${id + GUIDE_IMG_EXTENSION}`