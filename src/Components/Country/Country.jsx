import React from 'react';
import './country.css';

const Country = ({country}) => {

    const handleVisited = () => {
        console.log('button clicked');
    }
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h4>Continent: {country.continents.continents}</h4>
            <p>Area: {country.area.area} {country.area.area > 100000 ? '(Big country)' : '(Small country)'}</p>
            <p>Population: {country.population.population} </p>
            <button onClick={handleVisited}>Not visited</button>

        </div>
    );
};

export default Country;


/**
 * CSS in React
 * 
 * 1. Inline CSS (Style Object)
 * 2. 
 * 
 */