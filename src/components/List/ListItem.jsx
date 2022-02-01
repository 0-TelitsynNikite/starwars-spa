import React from 'react';
import '../../styles/lists.scss'

const ListItem = ({name, image}) => {
    return (
        <li className="list__item">
            <img className="list__img" src={image} alt={name}/>
            <a className="list__text" href="#">{name}</a>
        </li>
    );
};

export default ListItem;