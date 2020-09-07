import React from "react";

function Countries({ countries, activeCountry, handleCountry }) {
  return (
    <div className="all-contries">
      <h4>Select a Country</h4>
      <ul className="contries-ul">
        {countries.map((country) => (
          <li
            className={
              activeCountry === country.name
                ? "contries-list active"
                : "contries-list"
            }
            key={country.numericCode}
            onClick={() => handleCountry(country.name)}
          >
            <div className="country-name">{country.name}</div>
            <img src={country.flag} alt={country.name + " Flag"} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
