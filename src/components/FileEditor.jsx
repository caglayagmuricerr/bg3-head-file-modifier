import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import VersionCalculator from "./VersionCalculator";
import DisplayRaceID from "./DisplayRaceID";
import HandleGenerator from "./HandleGenerator";
import UUIDGenerator from "./UUIDGenerator";

import "../styles/FileEditor.css";

import questionmark from "../assets/icons/question-mark.svg";

const FileEditor = () => {
  const [oldWord, setOldWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [newVersion64, setNewVersion64] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newBodyShape, setNewBodyShape] = useState("");
  const [newBodyType, setNewBodyType] = useState("");
  const [newRaceUUID, setNewRaceUUID] = useState("");

  const newMetaUUID = UUIDGenerator();
  const newLocaUUID = HandleGenerator();
  const newVisualsUUID = UUIDGenerator();
  const newVisualResourceUUID = UUIDGenerator();
  const newSkeletonBankResourceUUID = UUIDGenerator();
  const newMaterialBankUUID = UUIDGenerator();
  const newCLEAuuid = UUIDGenerator();
  const newHMVYuuid = UUIDGenerator();
  const newNMuuid = UUIDGenerator();

  const [files, setFiles] = useState([]);
  const [metaLsxContent, setMetaLsxContent] = useState(null);
  const [locaXmlContent, setLocaXmlContent] = useState(null);
  const [visualsLsxContent, setVisualsLsxContent] = useState(null);
  const [_mergedLsfContent, setMergedLsfContent] = useState(null);

  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleFileChange = (e) => {
    const selectedFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      selectedFiles.push({
        file: file,
        relativePath: file.webkitRelativePath,
      });
    }
    setFiles(selectedFiles);

    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      if (file.name === "meta.lsx") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMetaLsxContent(e.target.result);
        };
        reader.readAsText(file);
      } else if (file.name === "CharacterCreationAppearanceVisuals.lsx") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setVisualsLsxContent(e.target.result);
        };
        reader.readAsText(file);
      } else if (file.name.endsWith(".loca.xml")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setLocaXmlContent(e.target.result);
        };
        reader.readAsText(file);
      } else if (file.name === "_merged.lsf.lsx") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMergedLsfContent(e.target.result);
        };
        reader.readAsText(file);
      }
    }
  };

  const handleRenameAndDownload = async () => {
    if (files.length === 0) {
      alert("Please select files before starting the renaming process.");
      return;
    }

    const zip = new JSZip();

    for (const { file, relativePath } of files) {
      let newFilePath = relativePath
        .split("/")
        .map((part) => part.replace(oldWord, newWord))
        .join("/");
      let fileContent = await file.text();

      if (relativePath.endsWith("meta.lsx")) {
        if (metaLsxContent) {
          fileContent = metaLsxContent;

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(fileContent, "application/xml");

          const authorAttr = xmlDoc.querySelector('attribute[id="Author"]');
          if (authorAttr) authorAttr.setAttribute("value", newAuthor);

          const descriptionAttr = xmlDoc.querySelector(
            'attribute[id="Description"]'
          );
          if (descriptionAttr)
            descriptionAttr.setAttribute("value", newDescription);

          const UUIDAttr = xmlDoc.querySelector('attribute[id="UUID"]');
          if (UUIDAttr) UUIDAttr.setAttribute("value", newMetaUUID);

          const Version64Attr = xmlDoc.querySelector(
            'region[id="Config"] > node[id="root"] > children > node[id="ModuleInfo"] > attribute[id="Version64"]'
          );
          if (Version64Attr) Version64Attr.setAttribute("value", newVersion64);

          const serializer = new XMLSerializer();
          fileContent = serializer.serializeToString(xmlDoc);
        } else {
          alert("meta.lsx file not found");
        }
      }

      if (relativePath.endsWith("CharacterCreationAppearanceVisuals.lsx")) {
        if (visualsLsxContent) {
          fileContent = visualsLsxContent;

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(fileContent, "application/xml");

          const bodyShapeAttr = xmlDoc.querySelector(
            'attribute[id="BodyShape"]'
          );
          if (bodyShapeAttr) bodyShapeAttr.setAttribute("value", newBodyShape);

          const bodyTypeAttr = xmlDoc.querySelector('attribute[id="BodyType"]');
          if (bodyTypeAttr) bodyTypeAttr.setAttribute("value", newBodyType);

          const displayNameAttr = xmlDoc.querySelector(
            'attribute[id="DisplayName"]'
          );
          if (displayNameAttr)
            displayNameAttr.setAttribute("handle", newLocaUUID);

          const raceUUIDAttr = xmlDoc.querySelector('attribute[id="RaceUUID"]');
          if (raceUUIDAttr) raceUUIDAttr.setAttribute("value", newRaceUUID);

          const visualsUUIDAttr = xmlDoc.querySelector('attribute[id="UUID"]');
          if (visualsUUIDAttr)
            visualsUUIDAttr.setAttribute("value", newVisualsUUID);

          const visualResourceUUIDAttr = xmlDoc.querySelector(
            'attribute[id="VisualResource"]'
          );
          if (visualResourceUUIDAttr)
            visualResourceUUIDAttr.setAttribute("value", newVisualResourceUUID);

          const serializer = new XMLSerializer();
          fileContent = serializer.serializeToString(xmlDoc);
        } else {
          alert("CharacterCreationAppearanceVisuals.lsx file not found");
        }
      }

      if (relativePath.endsWith(".loca.xml")) {
        if (locaXmlContent) {
          fileContent = locaXmlContent;

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(fileContent, "application/xml");

          const locaUUIDAttr = xmlDoc.querySelector('content[version="1"]');
          if (locaUUIDAttr)
            locaUUIDAttr.setAttribute("contentuid", newLocaUUID);

          const serializer = new XMLSerializer();
          fileContent = serializer.serializeToString(xmlDoc);
        } else {
          alert(".loca.xml file not found");
        }
      }

      if (relativePath.endsWith("_merged.lsf.lsx")) {
        if (_mergedLsfContent) {
          fileContent = _mergedLsfContent;

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(fileContent, "application/xml");

          const VisualBankResourceUUIDAttr = xmlDoc.querySelector(
            'region[id="VisualBank"] > node[id="VisualBank"] > children > node[id="Resource"] > attribute[id="ID"]'
          );
          if (VisualBankResourceUUIDAttr)
            VisualBankResourceUUIDAttr.setAttribute(
              "value",
              newVisualResourceUUID
            );

          const SkeletonBankResourceUUIDAttr = xmlDoc.querySelector(
            'region[id="SkeletonBank"] > node[id="SkeletonBank"] > children > node[id="Resource"] > attribute[id="ID"]'
          );
          if (SkeletonBankResourceUUIDAttr)
            SkeletonBankResourceUUIDAttr.setAttribute(
              "value",
              newSkeletonBankResourceUUID
            );

          const SkeletonResourceUUID = xmlDoc.querySelector(
            'region[id="VisualBank"] > node[id="VisualBank"] > children > node[id="Resource"] > attribute[id="SkeletonResource"]'
          );
          if (SkeletonResourceUUID)
            SkeletonResourceUUID.setAttribute(
              "value",
              newSkeletonBankResourceUUID
            ); // same as SkeletonBankResourceUUID

          const MaterialBankUUID = xmlDoc.querySelector(
            'region[id="MaterialBank"] > node[id="MaterialBank"] > children > node[id="Resource"] > attribute[id="ID"]'
          );
          if (MaterialBankUUID)
            MaterialBankUUID.setAttribute("value", newMaterialBankUUID);

          // VisualBank Objects MaterialID
          const objectsNodes = xmlDoc.querySelectorAll(
            'region[id="VisualBank"] > node[id="VisualBank"] > children > node[id="Resource"] > children > node[id="Objects"]'
          );

          const firstNodeMaterialID = objectsNodes[0].querySelector(
            'attribute[id="MaterialID"]'
          );
          const fourthNodeMaterialID = objectsNodes[3].querySelector(
            'attribute[id="MaterialID"]'
          );

          firstNodeMaterialID.setAttribute("value", newMaterialBankUUID);
          fourthNodeMaterialID.setAttribute("value", newMaterialBankUUID);

          // TextureBank
          const TextureBankResourceNodes = xmlDoc.querySelectorAll(
            'region[id="TextureBank"] > node[id="TextureBank"] > children > node[id="Resource"]'
          );
          const CLEAuuid =
            TextureBankResourceNodes[0].querySelector('attribute[id="ID"]');
          const HMVYuuid =
            TextureBankResourceNodes[1].querySelector('attribute[id="ID"]');
          const NMuuid =
            TextureBankResourceNodes[2].querySelector('attribute[id="ID"]');

          if (CLEAuuid) CLEAuuid.setAttribute("value", newCLEAuuid);
          const Texture2DParametersNodes = xmlDoc.querySelectorAll(
            'region[id="MaterialBank"] > node[id="MaterialBank"] > children > node[id="Resource"] > children > node[id="Texture2DParameters"]'
          );
          const eighthNodeTexture2DParameters =
            Texture2DParametersNodes[7].querySelector('attribute[id="ID"]');
          if (eighthNodeTexture2DParameters)
            eighthNodeTexture2DParameters.setAttribute("value", newCLEAuuid);

          if (HMVYuuid) HMVYuuid.setAttribute("value", newHMVYuuid);
          const twelwthNodeTexture2DParameters =
            Texture2DParametersNodes[11].querySelector('attribute[id="ID"]');
          if (twelwthNodeTexture2DParameters)
            twelwthNodeTexture2DParameters.setAttribute("value", newHMVYuuid);

          if (NMuuid) NMuuid.setAttribute("value", newNMuuid);
          const firstNodeTexture2DParameters =
            Texture2DParametersNodes[0].querySelector('attribute[id="ID"]');
          if (firstNodeTexture2DParameters)
            firstNodeTexture2DParameters.setAttribute("value", newNMuuid);

          const serializer = new XMLSerializer();
          fileContent = serializer.serializeToString(xmlDoc);
        } else {
          alert("_merged.lsf.lsx file not found");
        }
      }

      fileContent = fileContent.replace(new RegExp(oldWord, "g"), newWord);

      if (newFilePath.endsWith(".GR2") || newFilePath.endsWith(".DDS")) {
        zip.file(newFilePath, file, { binary: true });
      } else {
        zip.file(newFilePath, fileContent);
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, newWord + ".zip");
    });
  };

  const handleTooltipShow = (content) => {
    setTooltipContent(content);
  };

  const handleTooltipHide = () => {
    setTooltipContent("");
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    <div className="file-editor-container" onMouseMove={handleMouseMove}>
      <div className="radio-group">
        <input
          type="radio"
          id="vanilla"
          name="fileType"
          value="Template_Vanilla"
          onChange={(e) => setOldWord(e.target.value)}
          onMouseEnter={() =>
            handleTooltipShow("Select this if you downloaded Vanilla template.")
          }
          onMouseLeave={handleTooltipHide}
        />
        <label htmlFor="vanilla">Vanilla Version</label>
        <input
          type="radio"
          id="uniqueTav"
          name="fileType"
          value="Template_UTAV"
          onChange={(e) => setOldWord(e.target.value)}
          onMouseEnter={() =>
            handleTooltipShow("Select this if you downloaded Unique Tav template.")
          }
          onMouseLeave={handleTooltipHide}
        />
        <label htmlFor="uniqueTav">Unique Tav Version</label>
        {tooltipContent && (
          <div
            className="tooltip"
            style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
          >
            {tooltipContent}
          </div>
        )}
      </div>
      <div>
        <label>Mod Name </label>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Eirlys"
        />
        <a
          href="#"
          onMouseEnter={() =>
            handleTooltipShow("Your mod name on Mod Manager.")
          }
          onMouseLeave={handleTooltipHide}
        >
          <img src={questionmark} alt="Question Mark" />
        </a>
      </div>
      <div>
        <label>Author </label>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Me Myself and I"
        />
        <a
          href="#"
          onMouseEnter={() => handleTooltipShow("Author name shown in Mod Manager.")}
          onMouseLeave={handleTooltipHide}
        >
          <img src={questionmark} alt="Question Mark" />
        </a>
      </div>
      <div>
        <label>Description </label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="She won Miss Faerun."
        />
        <a
          href="#"
          onMouseEnter={() =>
            handleTooltipShow("Brief description of your mod.")
          }
          onMouseLeave={handleTooltipHide}
        >
          <img src={questionmark} alt="Question Mark" />
        </a>
      </div>
      <div>
        <label>Body Shape </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="bodyShape"
              value="0"
              checked={newBodyShape === "0"}
              onChange={(e) => setNewBodyShape(e.target.value)}
            />
            Standard Body
          </label>
          <label>
            <input
              type="radio"
              name="bodyShape"
              value="1"
              checked={newBodyShape === "1"}
              onChange={(e) => setNewBodyShape(e.target.value)}
            />
            Strong Body
          </label>
          <a
            href="#"
            onMouseEnter={() => handleTooltipShow("Select the body shape.")}
            onMouseLeave={handleTooltipHide}
          >
            <img src={questionmark} alt="Question Mark" />
          </a>
        </div>
      </div>
      <label>Body Type </label>
      <div className="radio-group">
        <div>
          <label>
            <input
              type="radio"
              name="bodyType"
              value="0"
              checked={newBodyType === "0"}
              onChange={(e) => setNewBodyType(e.target.value)}
            />
            Masculine
          </label>
          <label>
            <input
              type="radio"
              name="bodyType"
              value="1"
              checked={newBodyType === "1"}
              onChange={(e) => setNewBodyType(e.target.value)}
            />
            Feminine
          </label>
          <a
            href="#"
            onMouseEnter={() => handleTooltipShow("Select the body type.")}
            onMouseLeave={handleTooltipHide}
          >
            <img src={questionmark} alt="Question Mark" />
          </a>
        </div>
      </div>
      <div>
        <label>Mod Version </label>
        <input
          type="text"
          value={newVersion64}
          onChange={(e) => setNewVersion64(e.target.value)}
          placeholder="36028797018963968"
        />
        <a
          href="#"
          onMouseEnter={() =>
            handleTooltipShow(
              "Calculate the version of your mod below and paste it here."
            )
          }
          onMouseLeave={handleTooltipHide}
        >
          <img src={questionmark} alt="Question Mark" />
        </a>
      </div>
      <div>
        <a 
          href="#"
          className="calculate-version"
          onMouseEnter={() =>
            handleTooltipShow("Start from 1.0.0.0 and update the version number or don't. I don't think it matters that much unless you are a serious modder.")
          }
          onMouseLeave={handleTooltipHide}
        >
          <h2>Calculate Version</h2>
        </a>
        <VersionCalculator />
      </div>
      <div>
        <DisplayRaceID setNewRaceUUID={setNewRaceUUID} />
      </div>
      <div>
        <input
          type="file"
          webkitdirectory="true"
          directory="true"
          multiple
          onChange={handleFileChange}
          onMouseEnter={() =>
            handleTooltipShow("Select files to include in the mod.")
          }
          onMouseLeave={handleTooltipHide}
        />
      </div>
      <button className="download-button" onClick={handleRenameAndDownload}>
        Download Files
      </button>
      {tooltipContent && (
        <div
          className="tooltip"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default FileEditor;
