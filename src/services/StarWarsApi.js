import {API_PEOPLE, API_PLANETS, API_VEHICLES} from "../constants/constants";

export default class StarWarsApi {
    async getResource(url) {
        const res = await fetch(url);
        return res.json();
    }

     getAllPeople() {
        const res = this.getResource(API_PEOPLE).then(data => data.results);
        return res;
    }

    getAllPlanets() {
        const res = this.getResource(API_PLANETS).then(data => data.results);
        return res;
    }

    getAllVehicles() {
        const res = this.getResource(API_VEHICLES).then(data => data.results);
        return res;
    }
}