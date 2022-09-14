import React, { useState } from "react";

const Company = ({ name }) => {
  const [country, setCountry] = useState("India");

  const countryChangeHandler = (event) => {
    console.log(event);
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>
        Company | Testing props, Events, States, Hooks, Props, CSS, JSX,
        Snapshot
      </h2>
      <h3 data-testid="companyName">cognizant's official website</h3>
      <h4 data-testid="companyFullName">Company name : {name}</h4>

      <br />
      {/* Working with onchange */}
      <label>Enter your country :</label>
      <input
        type="text"
        placeholder="Enter Country"
        value={country}
        onChange={countryChangeHandler}
      />
      <p>Head over to Cognizant {country} website</p>
    </div>
  );
};

export default Company;
