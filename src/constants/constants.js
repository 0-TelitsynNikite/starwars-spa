//common
const HTTP = 'http://';
const HTTPS = 'https://';

//swapi
const SWAPI = 'swapi.dev/api';
const SWAPI_PEOPLE = '/people';
const SWAPI_FILMS = '/films';
const SWAPI_PLANETS = '/planets';
const SWAPI_VEHICLES = '/vehicles';

const API_PEOPLE = HTTPS + SWAPI + SWAPI_PEOPLE;
const API_PLANETS = HTTPS + SWAPI + SWAPI_PLANETS;
const API_VEHICLES = HTTPS + SWAPI + SWAPI_VEHICLES;

export {
    API_PEOPLE,
    SWAPI_PEOPLE,
    SWAPI,
    HTTPS,
    API_PLANETS,
    SWAPI_PLANETS,
    SWAPI_VEHICLES,
    API_VEHICLES
};

//visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
const GUIDE_PLANETS = 'planets';
const GUIDE_VEHICLES = 'vehicles';


export const GUIDE_IMG_EXTENSION = '.jpg';
export const URL_IMG_PLANETS = GUIDE_ROOT_IMG + GUIDE_PLANETS;
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
export const URL_IMG_VEHICLES = GUIDE_ROOT_IMG + GUIDE_VEHICLES;