import React from "react";

const BlenderInfo = () => {
  return (
    <div>
      <h3>Setting Up Blender Environment</h3>
      <p>
        ⭐ Download the version I'm using{" "}
        <a
          href="https://www.blender.org/download/releases/3-6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Blender 3.6)
        </a>
        <br />
        or any other version from{" "}
        <a
          href="https://www.blender.org/download/releases/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blender.org
        </a>
        <br />
        After Downloading and installing Blender
        <br />⭐ You need to install{" "}
        <a
          href="https://github.com/Norbyte/dos2de_collada_exporter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          Collada Exporter Plugin
        </a>
        {" "}and{" "}
        <a
          href="https://github.com/Norbyte/lslib/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          LSlib
        </a>
        <br />
        Video About Installing The Plugin and LSlib »{" "}
        <a
          href="https://www.youtube.com/watch?v=yQSqRF7dLB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎥
        </a>
        <br />
      </p>
    </div>
  );
};

export default BlenderInfo;
