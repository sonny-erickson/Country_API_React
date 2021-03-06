import React from 'react';

const Card = (props) => {
    console.log(props);
    //const country = props.country;
    const {country} = props;
    return (
        <li className="card">
        <img src={country.flag} alt="flag" />
        <div className="data-container">
          <ul>
            <li>{country.name}</li>
            <li>{country.capital}</li>
            <li>Pop. {country.population}</li>
          </ul>
        </div>
      </li>
    );
};

export default Card;