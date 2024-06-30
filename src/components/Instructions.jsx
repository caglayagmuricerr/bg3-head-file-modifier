import React, { useState, useEffect } from "react";
import "../styles/Instructions.css";

const Instructions = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showDevMsg, setShowDevMsg] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (content) => {
    setTooltipContent(content);
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const handleDevMsgClose = () => {
    setShowDevMsg(false);
  };

  const tooltipStyle = {
    position: "fixed",
    top: tooltipPosition.y,
    left: tooltipPosition.x,
    display: tooltipContent ? "block" : "none",
  };

  return (
    <div>
      <div className="other-res">
        <h3>Other resources you may find helpful 💖</h3>
        ❣️
        <a
          href="https://www.gimp.org/downloads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Gimp For Editing DDS Files
        </a>
        <br />
        ❣️
        <a
          href="https://bg3.wiki/wiki/Modding:Face_and_body_textures"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guide to Editing DDS Files
        </a>
        <br />
        ❣️
        <a
          href="https://www.youtube.com/watch?v=RMPivc5qunw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Editing Heads In Blender
        </a>
      </div>
      <div className="video-tutorial">
        <h3>Video Tutorial on Using This Website</h3>
        <iframe
          style={{
            padding: "10px",
            border: "10px dashed var(--light-pink)",
            borderRadius: "15px",
          }}
          width="500"
          height="315"
          src="https://www.youtube.com/embed/NpEaa2P7qZI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {showDevMsg && (
        <div className="dev-msg">
          <button className="close-btn" onClick={handleDevMsgClose}>
            ×
          </button>
          <p>
            This website is not intended to replace any existing tools. Instead,
            it offers an alternative for players who wish to create a custom
            head for their character without the hassle of editing files or
            searching for tutorials online.
            <br />
            Please note that I cannot automate the Blender and DDS editing
            processes. You'll need to handle those aspects yourself. I've
            included some resources to assist you in that.
            <br />
            This website may become outdated once official mod support is
            introduced.
            <br />
            Also this might not work with unique races.(i.e. Dragonborn,
            Githyanki) but it should work fine with human like races. (i.e.
            Human, Elf, Half-Elf, Drow)
          </p>
        </div>
      )}
      <h3>Choose a Template</h3>
      <div className="choose-template">
      <a
        className="template-btn"
        href="https://drive.google.com/file/d/1PemWnv8DM0HRwnjoopK0x1sORGxaUI8l/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() =>
          handleMouseEnter(
            "Use this if you don't have the Unique Tav mod installed."
          )
        }
        onMouseLeave={handleMouseLeave}
      >
        Vanilla Template
      </a>
      <a
        className="template-btn"
        href="https://drive.google.com/file/d/1-geNURHk_Bi3mMeW69NJL0WgXUwzeEGL/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() =>
          handleMouseEnter("Use this if you have the Unique Tav mod installed.")
        }
        onMouseLeave={handleMouseLeave}
      >
        Unique Tav Template
      </a>
      </div>
      <div className="tooltip" style={tooltipStyle}>
        {tooltipContent}
      </div>
    </div>
  );
};

export default Instructions;
