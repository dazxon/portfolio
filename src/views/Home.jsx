import React from "react";
import {
  Navbar,
  Hello,
  AboutMe,
  TempModal,
  WhatIDo,
  Resume,
  Interested,
} from "../components";

const Home = () => {
  return (
    <>
      {/* <TempModal /> */}
      <Navbar />
      <Hello />
      <AboutMe />
      <WhatIDo />
      <Resume />
      <Interested />
    </>
  );
};

export { Home };
