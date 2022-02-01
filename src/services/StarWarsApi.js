import {API_PEOPLE, API_PLANETS, API_VEHICLES} from "../constants/constants";

export default class StarWarsApi {
    async getResource(url) {
        const res = await fetch(url);
        return res.json();
    }

    getAllData(url) {
        const res = this.getResource(url).then(data => data.results);
        return res;
    }
}