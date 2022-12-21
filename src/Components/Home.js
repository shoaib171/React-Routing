/** @format */

import React from "react";
import Img from "../Components/Images/Error.png";

const Home = (props) => {
  console.log(Location);
  return (
    <>
      <h1 className="Head--title">Home-Page</h1>
      <br />

      <div className="Main--Container">
        <div className="Box">
          <img src={Img} />
          <p>
            The box testing approach of software testing consists of black box
            testing and white box testing. We are discussing here white box
            testing which also known as glass box is testing, structural
            testing, clear box testing, open box testing and transparent box
            testing
          </p>
        </div>
        <div className="Box">
          <img src={Img} />
          <p>
            The box testing approach of software testing consists of black box
            testing and white box testing. We are discussing here white box
            testing which also known as glass box is testing, structural
            testing, clear box testing, open box testing and transparent box
            testing
          </p>
        </div>
        <div className="Box">
          <img src={Img} />
          <p>
            The box testing approach of software testing consists of black box
            testing and white box testing. We are discussing here white box
            testing which also known as glass box is testing, structural
            testing, clear box testing, open box testing and transparent box
            testing
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
