import React from 'react';
import PlanetItem from "./PlanetItem";
import StarWarsApi from "../../services/StarWarsApi";
import {getPlanetImage, getPlanetId} from "../../services/getPlanetsData";
import {URL_IMG_PLANETS} from "../../constants/constants";
import {useState, useEffect} from "react";

const PlanetsList = () => {
    const [planets, setPlanets] = useState(null);

    const getResource = async () => {
        const res = await new StarWarsApi().getAllPlanets();

        const planetsList = res.map(({name, url}) => {
            const id = getPlanetId(url);
            const image = getPlanetImage(id, URL_IMG_PLANETS);
            return {
                name,
                id,
                image
            }
        });

        setPlanets(planetsList);
    }
    useEffect( () => {
        getResource();
    }, [])

    return (
        <>
            {planets && (
                <ul className="list">
                    {planets.map(({name, id, image}) => <PlanetItem name={name} key={id} image={image}/>)}
                </ul>
            )}
        </>
    );
};

export default PlanetsList;