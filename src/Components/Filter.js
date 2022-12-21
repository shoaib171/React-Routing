/** @format */

import React from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  console.log(
    "🚀 ~ file: Filter.js ~ line 7 ~ Filter ~ searchparams",
    searchparams.get("city")
  );
  console.log(
    "🚀 ~ file: Filter.js ~ line 7 ~ Filter ~ searchparams",
    searchparams.get("age")
  );
  const age = searchparams.get("age");
  const city = searchparams.get("city");
    return (
      
    <>
      <h1>This is Filter page</h1>
      <p>
        Your age is {age} and city is {city}
      </p>

      <button onClick={() => setSearchParams({ age: 70, city: "Koala" })}>
        Set age and city in Query
      </button>
    </>
  );
};

export default Filter;
