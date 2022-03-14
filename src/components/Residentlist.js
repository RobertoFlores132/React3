import React from 'react';
import Residentinfo from './Residentinfo';

const Residentlist = ({residents}) => {

    return (
        <div className='character-list'>

            {
                residents?.map (resident => (
                    <Residentinfo residentUrl={resident} key={resident}/>
                ))
            }
        </div>
    );
};

export default Residentlist;