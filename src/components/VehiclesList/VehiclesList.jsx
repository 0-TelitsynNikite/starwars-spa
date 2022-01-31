import React, {useState, useEffect} from 'react';
import StarWarsApi from "../../services/StarWarsApi";
import {getVehicleId, getVehicleImage} from "../../services/getVehiclesData";
import {URL_IMG_VEHICLES} from "../../constants/constants";
import VehicleItem from "./VehicleItem";


const VehiclesList = () => {
    const [vehicles, setVehicles] = useState(null);

    const getResource = async () => {
        const res = await new StarWarsApi().getAllVehicles();

        const planetsList = res.map(({name, url}) => {
            const id = getVehicleId(url);
            const image = getVehicleImage(id, URL_IMG_VEHICLES);
            return {
                name,
                id,
                image
            }
        });

        setVehicles(planetsList);
    }
    useEffect( () => {
        getResource();
    }, [])

    return (
        <>
            {vehicles && (
                <ul className="list">
                    {vehicles.map(({name, id, image}) => <VehicleItem name={name} key={id} image={image}/>)}
                </ul>
            )}
        </>
    );
};

export default VehiclesList;