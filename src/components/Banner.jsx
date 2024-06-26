import React from "react";
import starImg from "../assets/icons/star.svg";

export const Banner = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src={starImg}
          width="50"
          alt="star"
          style={{ paddingRight: "10px" }}
        />
        Make Your Own Head !
        <img
          src={starImg}
          width="50"
          alt="star"
          style={{ paddingLeft: "10px" }}
        />
      </p>
    </div>
  );
};

export default Banner;
