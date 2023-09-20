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
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <TempModal />
      <Navbar />
      <Hello />
      <AboutMe />
      {/* <WhatIDo /> */}
      <Resume />
      <Interested />
      <ContactForm />
      <Footer />
    </>
  );
};

export { Home };
