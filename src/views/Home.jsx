import React from "react";
import {
  Navbar,
  Hello,
  AboutMe,
  TempModal,
  WhatIDo,
  Resume,
  Interested,
  ContactForm,
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
      <ContactForm />
    </>
  );
};

export { Home };
