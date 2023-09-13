import React from "react";
import "./style.whatido.css";
import { WhatIDoItem } from "../WhatIDoItem";

const WhatIDo = () => {
  const items = [
    {
      icon: "fa-solid fa-palette",
      title: "Graphic Desing",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
    {
      icon: "fa-solid fa-desktop",
      title: "Web Design",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
    {
      icon: "fa-solid fa-pen-ruler",
      title: "Web Development",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "Brand Identity",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Business Analysis",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Digital Marketing",
      paragraph:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standar dummy text",
    },
  ];

  return (
    <section class="section3" id="services">
      <div class="divTitle">
        <h6 class="upTitle">
          <span class="upTitleSub">What I Do?</span>
        </h6>
        <h2 class="downTitle">How i can help your next project</h2>
      </div>
      <div class="divGrid">
        {items.length && items.map((i) => <WhatIDoItem data={i} />)}
      </div>
    </section>
  );
};

export { WhatIDo };
