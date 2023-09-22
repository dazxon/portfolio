import React from "react";
import "./style.resume.css";
import cv from "../../assets/AgustinDonalisio_CV_EN.pdf";
import { ResumeItem } from "../ResumeItem";

const Resume = () => {
  const educationArray = [
    {
      title: "Full Stack Developer",
      subtitle: "Plataforma 5 / 2023",
      responsabilities: [
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      title: "Systems",
      subtitle: "ORT Argentina / 2022 - Present",
      responsabilities: [
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      title: "Professional Web Developer",
      subtitle: "Universidad Tecnologica Nacional / 2021",
      responsabilities: [
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
  ];

  const experienceArray = [
    {
      title: "Software Developer",
      subtitle: "Obux / 2021 - 2023",
      responsabilities: [
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
  ];

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "AgustinDonalisio_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section class="section4" id="resume">
      <div class="divTitle">
        <h6 class="upTitle">
          <span class="upTitleSub">Resume</span>
        </h6>
        <h2 class="downTitle">A summary of My Resume</h2>
      </div>

      {/* <!--MY EDUCATION - MY EXPERIENCE--> */}
      <section class="contenedorResume popins">
        {/* <!--MY EDUCATION--> */}
        <section class="myEducationMyExperience">
          <h4>My Education</h4>
          {/* <!--SECTION MY EDUCATION LEFT--> */}

          {/* <!--BARRA VERTICAL 1--> */}
          <section class="resumeMain">
            <div>
              <hr />
            </div>
            <section className="container">
              {educationArray.map((e, i) => {
                if (i > 0) {
                  return (
                    <>
                      <hr key={i} className="hrItem" />
                      <ResumeItem key={i} data={e} />
                    </>
                  );
                } else {
                  return <ResumeItem key={i} data={e} />;
                }
              })}
            </section>
          </section>
        </section>
        {/* <!--MY EXPERIENCE--> */}
        <section class="myEducationMyExperience">
          <h4>My Experience</h4>

          {/* <!--SECTION MY EXPERIENCE RIGHT--> */}

          {/* <!--BARRA VERTICAL 2--> */}
          <section class="resumeMain">
            <div>
              <hr />
            </div>
            <section>
              {experienceArray.map((e, i) => {
                if (i > 0) {
                  return (
                    <>
                      <hr key={i} className="hrItem" />
                      <ResumeItem key={i} data={e} />
                    </>
                  );
                } else {
                  return <ResumeItem key={i} data={e} />;
                }
              })}
            </section>
          </section>
        </section>
      </section>

      {/* <!--MY SKILLS--> */}
      <section class="sectionMySkills popins">
        <h4>My Skills</h4>

        <section>
          {/* <!--DIV IZQUIERDO--> */}
          <div class="mySkillsDivIzquierdo">
            <section>
              <p>Web Design</p>
              <p>65%</p>
            </section>

            <div class="barWebDesign">
              <span class="spanSkills"></span>
            </div>

            <section>
              <p>HTML/CSS</p>
              <p>95%</p>
            </section>

            <div class="barHtmlCss">
              <span class="spanSkills"></span>
            </div>

            <section>
              <p>JavaScript</p>
              <p>80%</p>
            </section>

            <div class="barJS">
              <span class="spanSkills"></span>
            </div>
          </div>

          {/* <!--DIV DERECHO--> */}
          <div class="mySkillsDivDerecho">
            <section>
              <p>React JS</p>
              <p>70%</p>
            </section>

            <div class="barReact">
              <span class="spanSkills"></span>
            </div>

            <section>
              <p>Angular Js</p>
              <p>60%</p>
            </section>

            <div class="barAngular">
              <span class="spanSkills"></span>
            </div>

            <section>
              <p>Bootstrap</p>
              <p>99%</p>
            </section>

            <div class="barBootstrap">
              <span class="spanSkills"></span>
            </div>
          </div>
        </section>
      </section>

      {/* <!--BUTTON CV--> */}
      <div class="divCv">
        <button class="buttonCv popins" onClick={handleDownloadCv}>
          Download CV
        </button>
      </div>
    </section>
  );
};

export { Resume };
