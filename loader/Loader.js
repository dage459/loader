/*
 * MIT License
 * Copyright(c) 2020 @dage459
 *    http://www.opensource.org/licenses/mit-license.php
 */

/*
 * --------------------------------------------------------------------------------
 * Description:
 *        ToDo:
 * --------------------------------------------------------------------------------
 */

import React from "react";
import "./loader.css";

const Loader = ({ type, size, color }) => {
  const loaderType = !type ? "spinner" : type;
  const loaderSize = !size ? "md" : size;
  const loaderColor = !color ? "primary" : color;

  return (
    <>
      <div className={`${loaderType} ${loaderSize} ${loaderColor}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
