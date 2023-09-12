import React from "react";
import { Navbar, Hello, AboutMe, TempModal } from "../components";

const Home = () => {
  return (
    <>
      <TempModal />
      <Navbar />
      <Hello />
      <AboutMe />
    </>
  );
};

export { Home };
