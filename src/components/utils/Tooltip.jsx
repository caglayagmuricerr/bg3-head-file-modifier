import React, { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}
      {isTooltipVisible && (
        <span
          className="tooltip"
          style={{
            position: "absolute",
            whiteSpace: "nowrap",
            margin: "0px 0px 0px 20px",
            padding: "10px",
            background: "var(--mid-orange)",
            borderRadius: "10px",
            zIndex: 9999,
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;