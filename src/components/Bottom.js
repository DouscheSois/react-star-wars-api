import React from "react";
import githubIcon from "../media/github.svg";
import goLiveIcon from "../media/golive.svg";

const Bottom = () => {
  return (
    <div className="bottom">
      <h1>Made by Roger Alexander</h1>
      <div className="links">
        <a href="https://www.github.com/douschesois/">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="https://www.douschesois.com/">
          <img src={goLiveIcon} alt="Go Live" />
        </a>
      </div>
    </div>
  );
};

export default Bottom;
