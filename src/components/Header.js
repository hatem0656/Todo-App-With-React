import { useState, useEffect } from "react";

import bkLight from "../images/bg-desktop-light.jpg";

const Header = () => {
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    let r = document.querySelector(":root");
    if (lightMode) {
      r.style = `--main-color: white ; 
               --bk-color: hsl(0, 0%, 98%) ;
               --bk-image: url(${bkLight});
               --main-Fcolor: hsl(235, 19%, 35%);
               --seconadry-Fcolor: hsl(236, 9%, 61%);
               --border-color: hsl(233, 11%, 84%) ;
               --hover-color: black ;
               --selection-color: blue ;
               `;
    } else {
      r.style = "";
    }
  }, [lightMode]);

  return (
    <header className="mb-2 py-3 custom-container col-md-6 col-sm-8 col-11 d-flex justify-content-between">
      <h2 className=" text-white fw-bold col-xl-10 col-11 px-3 pt-1 ">TODO</h2>
      <div className="theme-icon col ms-xl-3 ">
        {lightMode && (
          <i
            className="bi bi-moon-fill btn fs-5"
            onClick={() => {
              setLightMode(false);
            }}
          ></i>
        )}
        {!lightMode && (
          <i
            className="bi bi-brightness-high-fill btn fs-5"
            onClick={() => {
              setLightMode(true);
            }}
          ></i>
        )}
      </div>
    </header>
  );
};

export default Header;
