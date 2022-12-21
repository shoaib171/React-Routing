/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../Data";
const Services = () => {
  const Navigate = useNavigate();
  const NavigatePage = () => {
    Navigate("/filter");
  };
  // const NavigatePage = () => {
  //   let x = true;
  //   if (x) {
  //     Navigate("/filter");
  //   } else {
  //     Navigate("/about");
  //   }
  // };

  // const NavigatePage = (url) => {
  //   Navigate(url);
  // };

  return (
    <>
      <h1 className="Head--title">Services</h1>
      <button onClick={() => Navigate("/about")}>Go to about page</button>
      <button onClick={NavigatePage}>Go to Filter page</button>
      {/*<br />
    Name:{Data[0].name}
    <br />
    City:{Data[0].city}
    <br />
    Name:{Data[1].name}
    <br />
  City:{Data[2].city}*/}
      <br />
      {Data.map((item, index) => {
        return item.name;
      })}
    </>
  );
};

export default Services;
