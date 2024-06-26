import React, { useState, useEffect } from "react";
import "../styles/VersionCalculator.css";

const VersionCalculator = () => {
  const [major, setMajor] = useState(1);
  const [minor, setMinor] = useState(0);
  const [revision, setRevision] = useState(0);
  const [build, setBuild] = useState(0);
  const [number, setNumber] = useState(null);
  const [copyStatus, setCopyStatus] = useState(false);

  const versionToNumber = (major, minor, revision, build) => {
    return (
      BigInt(major) * BigInt(2 ** 55) +
      BigInt(minor) * BigInt(2 ** 47) +
      BigInt(revision) * BigInt(2 ** 31) +
      BigInt(build)
    );
  };

  const handleConvert = () => {
    const result = versionToNumber(major, minor, revision, build);
    setNumber(result.toString());
  };

  useEffect(() => {
    handleConvert();
  }, [major, minor, revision, build]);

  const handleCopy = () => {
    if (number !== null) {
      navigator.clipboard.writeText(number).then(
        () => {
          setCopyStatus(true);
          setTimeout(() => {
            setCopyStatus(false);
          }, 2000);
        },
        () => {
          setCopyStatus(false);
        }
      );
    }
  };

  const handleInputChange = (setter, value) => {
    if (value >= 0) {
      setter(value);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="labels-row">
          <label>Major</label>
          <label>Minor</label>
          <label>Revision</label>
          <label>Build</label>
        </div>
        <div className="inputs-row">
          <input
            className="version-input"
            type="number"
            value={major}
            onChange={(e) =>
              handleInputChange(setMajor, Number(e.target.value))
            }
          />
          <input
            className="version-input"
            type="number"
            value={minor}
            onChange={(e) =>
              handleInputChange(setMinor, Number(e.target.value))
            }
          />
          <input
            className="version-input"
            type="number"
            value={revision}
            onChange={(e) =>
              handleInputChange(setRevision, Number(e.target.value))
            }
          />
          <input
            className="version-input"
            type="number"
            value={build}
            onChange={(e) =>
              handleInputChange(setBuild, Number(e.target.value))
            }
          />
        </div>
      </div>
      <br />
      <div className="result-card">
        <button className="copy-button" onClick={handleCopy}>
          {copyStatus ? "Copied!" : "Copy"}
        </button>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default VersionCalculator;
