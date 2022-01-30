import React from 'react';
import './PeopleItem.css'

const PeopleItem = ({name, id, image}) => {
    return (
        <li className="characters-list__item">
            <a href="#"><img className="characters-list__img" src={image} alt={name}/></a>
            <a href="#" className="characters-list__text">{name}</a>
        </li>
    );
};

export default PeopleItem;