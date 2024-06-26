import React from "react";
import FileEditor from "../components/FileEditor";
import Instructions from "../components/Instructions";

import BlenderInfo from "../components/BlenderInfo";

function Home() {
  return (
    <div>
      <Instructions />
      <FileEditor />
      <BlenderInfo />
    </div>
  );
}

export default Home;
