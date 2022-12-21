/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  const { name } = params;
  return (
    <>
      <h1>This is {name} Page</h1>
      <li>
        <Link to="/about">About-page</Link>
      </li>
    </>
  );
};
export default User;
