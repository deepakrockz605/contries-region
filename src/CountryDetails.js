import React from "react";

function CountryDetails({ countryDetails, regionName, countryName }) {
  return (
    <div className="country-details">
      <div className="country-headerDetails">
        {regionName} / <span>{countryName}</span>
      </div>
      <div className="country-details-wrapper">
        <img src={countryDetails.flag} alt={countryDetails.name + " Flag"} />
        <div className="contry-stateDetails">
          <p className="countryCode">
            {countryDetails.name} <span>({countryDetails.alpha3Code})</span>
          </p>
          <p className="contry-capital">{countryDetails.capital}</p>
        </div>
      </div>
      <ul>
        <li>
          <p className="country-details-header">Demonym</p>
          <p className="country-details-info">{countryDetails.demonym}</p>
        </li>
        <li>
          <p className="country-details-header">Calling Code</p>
          <p className="country-details-info">
            {countryDetails.callingCodes[0]}
          </p>
        </li>
        <li>
          <p className="country-details-header">Currency</p>
          <p className="country-details-info">
            {countryDetails.currencies[0].symbol}{" "}
            {countryDetails.currencies[0].name}
          </p>
        </li>
        <li>
          <p className="country-details-header">Population</p>
          <p className="country-details-info">{countryDetails.population}</p>
        </li>
      </ul>
    </div>
  );
}

export default CountryDetails;
