import {API_PEOPLE} from "../constants/constants";

export default class StarWarsApi {
    async getResource(url) {
        const res = await fetch(url);
        return res.json();
    }

    async getAllPeople() {
        const res = this.getResource(API_PEOPLE).then(data => data.results);
        return res;
    }

}