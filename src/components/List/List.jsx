import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem";
import StarWarsApi from "../../services/StarWarsApi";
import {getId, getImage} from "../../services/getData";
import '../../styles/lists.scss';

const List = ({api, category, img}) => {
    const [list, setList] = useState(null);

    const getResource = async () => {
        const res = await new StarWarsApi().getAllData(api);

        const getArr = res.map(({name, url}) => {
            const id = getId(url, category);
            const image = getImage(id, img)
            return {
                name,
                url,
                image,
                id
            }
        });

        setList(getArr);
    }

    useEffect( () => {
        getResource();
    }, [])

    return (
        <ul className="list">
            {list && list.map(({name, url, image, id}) => <ListItem image={image} key={url} name={name}/>)}
        </ul>
    );
};

export default List;