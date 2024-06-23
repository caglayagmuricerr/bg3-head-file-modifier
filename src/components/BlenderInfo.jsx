import React from 'react'

const BlenderInfo = () => {
  return (
    <div>
        <h3>3. Setting Up Blender Environment</h3>
        <p>
        Download the version I'm using {" "}
          <a
            href="https://www.blender.org/download/releases/3-6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Blender 3.6)
          </a>
          <br />
            or any other version from {" "}
          <a
            href="https://www.blender.org/download/releases/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blender.org
          </a>
          <br />
          After Downloading and installing Blender
          <br />
          You need to install the {" "} 
          <a href="https://github.com/Norbyte/dos2de_collada_exporter" target="_blank" rel="noopener noreferrer">
            Collada Exporter Plugin
          </a>
          <br />
          {" "} and {" "}
          <a href="https://github.com/Norbyte/lslib/releases" target="_blank" rel="noopener noreferrer">
            LSlib
          </a>
          {" "} Video About Installing The Plugin and LSlib » {" "}
          <a href="https://www.youtube.com/watch?v=3Z9Z6Z9Z9Z4" target="_blank" rel="noopener noreferrer">
          🎥
          </a>
          <br />
          </p>
          <h3>Here are some other resources that you may find helpful 💖</h3>
          ❣️
          <a href="https://bg3.wiki/wiki/Modding:Face_and_body_textures" target="_blank" rel="noopener noreferrer">Editing DDS Files</a>
      </div>
  )
}

export default BlenderInfo