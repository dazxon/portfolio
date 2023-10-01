import React from "react";
import {
  Navbar,
  Hello,
  AboutMe,
  WhatIDo,
  Resume,
  Interested,
  ContactForm,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hello />
      <AboutMe />
      {/* <WhatIDo /> */}
      <Resume />
      {/* <Interested /> */}
      <ContactForm />
      <Footer />
    </>
  );
};

export { Home };
