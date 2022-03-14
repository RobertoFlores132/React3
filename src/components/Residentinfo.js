import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Residentinfo = ({ residentUrl }) => {

    const [ character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(residentUrl)
        .then(res => setCharacter(res.data))
    }, [residentUrl])
console.log(character)
    return (
        <div className='character'>
        <div className='character-card'>
            <h2>Name: {character.name}</h2>
            <p><b>Status:</b> {character.status}</p>
            <img src={character.image} alt="" />
            <p><b>Dimension: </b>{character.origin?.name}</p>
            <p><b>Episodes: </b>{character.episode?.length}</p>
        </div>
        </div>
    );
};

export default Residentinfo;