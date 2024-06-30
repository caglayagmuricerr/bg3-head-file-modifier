import React from "react";
import starImg from "../assets/icons/star.svg";

export const Banner = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <img
          src={starImg}
          width="50"
          alt="star"
          style={{ paddingRight: "10px", position: "relative", top: "15px"}}
        />
        Make Your Own Head !
        <img
          src={starImg}
          width="50"
          alt="star"
          style={{ paddingLeft: "10px", position: "relative", top: "15px"}}
        />
      </div>
    </div>
  );
};

export default Banner;
