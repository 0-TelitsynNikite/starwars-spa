import React, {useEffect, useState} from 'react';
import StarWarsApi from "../../services/StarWarsApi";
import PeopleItem from "../PeopleItem/PeopleItem";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import {URL_IMG_PERSON} from "../../constants/constants";
import '../../styles/lists.css'

const PeopleList = () => {
    const [people, setPeople] = useState(null);

    const getResource = async () => {
        const res = await new StarWarsApi().getAllPeople();

        const peopleList = res.map(({name, url}) => {
            const id = getPeopleId(url)
            const image = getPeopleImage(id, URL_IMG_PERSON)
            console.log(image)
            return {
                name: name,
                id: id,
                image: image
            }
        });

        setPeople(peopleList);
    }
    useEffect( () => {
        getResource();
    }, [])

    return (
            <>
                {people && (
                    <ul className="list">
                        {people.map(({name, id, image}) => <PeopleItem name={name} key={id} image={image}/>)}
                    </ul>
                )}
            </>
    );
};

export default PeopleList;