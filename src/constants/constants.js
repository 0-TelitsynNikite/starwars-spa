//common
const HTTP = 'http://';
const HTTPS = 'https://';

//swapi
const SWAPI = 'swapi.dev/api';
const SWAPI_PEOPLE = '/people';
const SWAPI_FILMS = '/films';
const SWAPI_PLANETS = '/planets';

const API_PEOPLE = HTTPS + SWAPI + SWAPI_PEOPLE;

export {API_PEOPLE, SWAPI_PEOPLE, SWAPI, HTTPS};

//visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;