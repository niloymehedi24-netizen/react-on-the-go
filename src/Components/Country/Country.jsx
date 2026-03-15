import React from 'react';

const Country = ({country}) => {
    
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h4>Continent: {country.continents.continents}</h4>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population} </p>

        </div>
    );
};

export default Country;