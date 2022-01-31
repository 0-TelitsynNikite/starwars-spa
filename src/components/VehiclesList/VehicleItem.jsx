import React from 'react';

const VehicleItem = ({name, image}) => {
    return (
        <li className="list__item">
            <img className="list__img" src={image} alt=""/>
            <a className="list__text" href="#">{name}</a>
        </li>
    );
};

export default VehicleItem;