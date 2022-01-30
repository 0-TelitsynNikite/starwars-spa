import React, {useEffect, useState} from 'react';
import StarWarsApi from "../../services/StarWarsApi";

const PeopleList = () => {
    const [people, setPeople] = useState(null);

    const getResource = async () => {
        const res = await new StarWarsApi().getAllPeople();

        const peopleList = res.map(({name, url}) => {
            return {
                name: name,
                url: url
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
                    <ul>
                        {people.map(({name, url}) => <li key={url}>{name}</li>)}
                    </ul>
                )}
            </>
    );
};

export default PeopleList;