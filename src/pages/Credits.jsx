import React from "react";
import HeartBg from "../components/HeartBg";

const Credits = () => {
  return (
    <div>
      <HeartBg />
      <h1>Credits</h1>
      <p>
        🌈 I learned most of what I know from {" "}
        <a
          href="https://www.youtube.com/user/Padme4000"
          target="_blank"
          rel="noopener noreferrer"
        >
           Padme 4000
        </a>
        <br />
        🌈
        <a
          href="https://codepen.io/realjameal/pen/NxoZBq"
          target="_blank"
          rel="noopener noreferrer"
        >
          💗 Background
        </a>{" "}
        from{" "}
        <a
          href="
        https://codepen.io/realjameal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jameal G
        </a>
        <br />
        🌈
        <a
          href="https://www.cursors-4u.com/powerpuff_girls/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powepuff Girls Cursor
        </a>{" "}
        from{" "}
        <a
          href="https://www.cursors-4u.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cursors-4U.com
        </a>
        <br />
        🌈
        <a
          href="https://tholman.com/cursor-effects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          90's cursor effects
        </a>{" "}
        from{" "}
        <a
          href="https://github.com/tholman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tim Holman
        </a>
        <br />
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
        🌈 💻 Built With Vite + React
        </a>
      </p>
    </div>
  );
};

export default Credits;
