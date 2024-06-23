import React from "react";
import FileEditor from "../components/FileEditor";
import Instructions from "../components/Instructions";
import HeartBg from "../components/HeartBg";
import BlenderInfo from "../components/BlenderInfo";

function Home() {
  return (
    <div>
      <HeartBg />
      <Instructions />
      <FileEditor />
      <BlenderInfo />
    </div>
  );
}

export default Home;
