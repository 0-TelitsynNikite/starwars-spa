import React, {useState} from 'react';

const PlanetItem = ({name, id, image}) => {
    if (typeof image != "string") {
        return <h1>Hello</h1>
    }

    return (
        <li className="list__item">

            {image ? (
                <img className="list__img" src={image}></img>
            ) : (
                <h1>Error</h1>
            )}

            <a className="list__text" href="#">{name}</a>
        </li>
    )
};

export default PlanetItem;