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
      <p>Go to Cognizant {country} website</p>

      <br />
      <div
        className="notification"
        data-testid="successNotification"
        style={{ backgroundColor: "#00ff00", padding: "10px" }}
      >
        Data Saved...!
      </div>

      <button role="buttonClick" className="btn-danger">Danger Button</button>
    </div>
  );
};

export default Company;
