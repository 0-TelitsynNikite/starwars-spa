import {API_PEOPLE} from "../constants/constants";

export default class StarWarsApi {
   async getResource(url) {
       const res = await fetch(url);
       return await res.json();
   }

   async getAllPeople() {
       const res = await this.getResource(API_PEOPLE).then(data => data.results);
       return res;
   }

   _transform(prom) {
        return {
            name: prom.name
        }
   }
}
