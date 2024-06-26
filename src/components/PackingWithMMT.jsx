import React, { useState } from "react";
import PackGif from "../assets/gifs/packing-instruction.gif";

const PackingWithMMT = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
    updateTooltipPosition(e);
  };

  const handleMouseMove = (e) => {
    updateTooltipPosition(e);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const updateTooltipPosition = (e) => {
    const xOffset = -350;
    const yOffset = -500;
    setTooltipPosition({ x: e.clientX + xOffset, y: e.clientY + yOffset });
  };

  return (
    <div>
      <h3>Packaging Your Mod After Editing</h3>
      <p>
      ⭐ Download
        <a
          href="https://github.com/ShinyHobo/BG3-Modders-Multitool/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          BG3 Modders Multitool
        </a>
        <br />
        ⭐ Extract The Folder and Run The .exe
        <br />
        ⭐ Drag and Drop Your Files Into The Blue Box
        <br />
        <img
          src={PackGif}
          alt="Drag and Drop Your Files Into The Blue Box"
          style={{
            width: "400px",
            marginTop: "20px",
            border: "10px solid var(--light-pink)",
            borderRadius: "20px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        {isTooltipVisible && (
          <div
            className="hover-display-image"
            style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
          >
            <img
              src={PackGif}
              alt="Drag and Drop Your Files Into The Blue Box"
              style={{
                width: "800px",
                border: "10px solid var(--light-pink)",
                borderRadius: "20px",
                zIndex: "9999",
              }}
            />
          </div>
        )}
      </p>
    </div>
  );
};

export default PackingWithMMT;
