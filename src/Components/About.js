/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const About = () => {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <h1 className="Head--title">About-us</h1>
      <h3>{location.state.mess}</h3>
      <p>
        The box testing approach of software testing consists of black box
        testing and white box testing. We are discussing here white box testing
        which also known as glass box is testing, structural testing, clear box
        testing, open box testing and transparent box testing. It tests internal
        coding and infrastructure of a software focus on checking of predefined
        inputs against expected and desired outputs.
      </p>
      <li>
        <Link to="/user/slug">SLug</Link>
      </li>
      <li>
        <Link to="/user/Format">Format</Link>
      </li>
    </>
  );
};

export default About;
