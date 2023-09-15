import React from "react";
import "./style.hello.css";
import profileImg from "../../assets/blank-profile.webp";

const Hello = () => {
  return (
    <>
      <section class="sectionAmarillo roboto" id="home">
        <section class="section1">
          <div class="section2">
            <h2>HI, I'M A FRONT & BACK END</h2>
            <section class="divDeveloper">
              <h1>DEVELOPER</h1>
              <hr />
            </section>
            <h6>based in Buenos Aires, ARG.</h6>
            <section class="sectionButtons">
              <button class="buttonWorks">View My Works</button>
              <a href="#contact">Contact Me</a>
              <i class="fa-solid fa-circle-arrow-down"></i>
            </section>
          </div>
          <div class="divFotoPerfil">
            <img src={profileImg} alt="" class="fotoPerfil" />
          </div>
        </section>
      </section>
      <section class="flecha">
        <a href="#about" class="aboutMe" id="about">
          <i class="fa-solid fa-arrow-down"></i>
        </a>
      </section>
    </>
  );
};

export { Hello };
