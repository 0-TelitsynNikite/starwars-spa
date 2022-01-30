import React from 'react';
import './PeopleItem.css'

const PeopleItem = ({name, id, image}) => {
    return (
        <li className="list__item">
            <a href="#"><img className="list__img" src={image} alt={name}/></a>
            <a href="#" className="list__text">{name}</a>
        </li>
    );
};

export default PeopleItem;