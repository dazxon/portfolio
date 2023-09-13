import React from "react";
import "./style.whatidoitem.css";

const WhatIDoItem = ({ data }) => {
  return (
    <div class="divsProject">
      <i className={data.icon}></i>
      <h6>{data.title}</h6>
      <p>{data.paragraph}</p>
    </div>
  );
};

export { WhatIDoItem };
