import React from 'react';

const PeopleItem = ({name, id, image}) => {
    return (
        <li>
            <img src={image} alt=""/>
            {name}
        </li>
    );
};

export default PeopleItem;