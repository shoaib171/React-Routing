/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = (props) => {
  return (
    <>
      <h1 className="Head--title">{props.title}</h1>
      <h2>Here we have some other Business</h2>
      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="other">Other</Link>
      <Outlet />
    </>
  );
};

export default Contact;
