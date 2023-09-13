import React from "react";
import { Navbar, Hello, AboutMe, TempModal, WhatIDo } from "../components";

const Home = () => {
  return (
    <>
      <TempModal />
      <Navbar />
      <Hello />
      <AboutMe />
      <WhatIDo />
    </>
  );
};

export { Home };
