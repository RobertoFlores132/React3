import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {

    const [ typeId, setTypeId ] = useState('')

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
        .then(res => setLocation(res.data))
    }

    return (
        <div className='input-dimension'>
            <input 
                type="text" className='input'
                placeholder="Input A Dimension ID" 
                onChange={e => setTypeId(e.target.value)} 
                value={typeId}/>
            <button onClick={searchType}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
};

export default SearchBox;