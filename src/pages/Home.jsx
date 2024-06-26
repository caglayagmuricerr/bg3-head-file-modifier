import React from "react";
import FileEditor from "../components/FileEditor";
import Instructions from "../components/Instructions";
import PackingWithMMT from "../components/PackingWithMMT";
import Banner from "../components/Banner";
import TheEnd from "../components/TheEnd";

import BlenderInfo from "../components/BlenderInfo";

import dividerImg from "../assets/images/divider.svg";

function Home() {
  const divider = (
    <img src={dividerImg}
    width="500"
    alt="divider"
    style={{
      marginTop: "20px",
    }} />
  );
  return (
    <div>
      <Banner />
      <img src={dividerImg} width="500" alt="divider" style={{ marginTop: "0px" }} />
      <Instructions />
      {divider}
      <FileEditor />
      {divider}
      <BlenderInfo />
      {divider}
      <PackingWithMMT />
      {divider}
      <TheEnd />
    </div>
  );
}

export default Home;
