import React, { useState } from "react";
import "../styles/DisplayRaceID.css";

const DisplayRaceID = ({ setNewRaceUUID }) => {
  const [selectedUUID, setSelectedUUID] = useState("");

  const buttonData = [
    { uuid: "78cd3bcc-1c43-4a2a-aa80-c34322c16a04", label: "Halfling" },
    { uuid: "f1b3f884-4029-4f0f-b158-1f9fe0ae5a0d", label: "Gnome" },
    { uuid: "3560f4a2-c0b8-4f8b-baf8-6b6eaef0c160", label: "Deep Gnome" },
    { uuid: "b6dccbed-30f3-424b-a181-c4540cf38197", label: "Tiefling" },
    { uuid: "bdf9b779-002c-4077-b377-8ea7c1faa795", label: "Githyanki" },
    { uuid: "0eb594cb-8820-4be6-a58d-8be7a1a98fba", label: "Human" },
    { uuid: "6c038dcb-7eb5-431d-84f8-cecfaf1c0c5a", label: "Elf" },
    { uuid: "4f5d1434-5175-4fa9-b7dc-ab24fba37929", label: "Drow" },
    { uuid: "45f4ac10-3c89-4fb2-b37d-f973bb9110c0", label: "HalfElf/Drow" },
    { uuid: "0ab2874d-cfdc-405e-8a97-d37bfbb23c52", label: "Dwarf" },
    { uuid: "9c61a74a-20df-4119-89c5-d996956b6c66", label: "Dragonborn" },
    { uuid: "5c39a726-71c8-4748-ba8d-f768b3c11a91", label: "Half-Orc" },
  ];

  const handleButtonClick = (uuid) => {
    console.log("Button clicked:", uuid);
    setNewRaceUUID(uuid);
    setSelectedUUID(uuid);
  };

  return (
    <div className="raceid-div">
      <h2>Choose Race</h2>
      <div className="grid-container">
        {buttonData.map((button) => (
          <button
            key={button.uuid}
            onClick={() => handleButtonClick(button.uuid)}
            className={selectedUUID === button.uuid ? "selected" : ""}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayRaceID;