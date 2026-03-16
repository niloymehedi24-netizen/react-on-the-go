import React, { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountries}) => {
    console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // 1. First system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // 2. Second system
        // setVisited(visited? false : true)
        // 3. Third system
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    return (
        <div className= {`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h4>Continent: {country.continents.continents}</h4>
            <p>Area: {country.area.area} {country.area.area > 100000 ? '(Big country)' : '(Small country)'}</p>
            <p>Population: {country.population.population} </p>
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Not visited'}
            </button>

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