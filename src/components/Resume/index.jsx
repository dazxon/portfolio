import React from "react";
import "./style.resume.css";
import cv from "../../assets/AgustinDonalisio_CV_EN.pdf";

const Resume = () => {
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
            <section>
              <div>
                <h5>Master in computer engineering</h5>
                <h6>Harvard University / 2015 - 2017</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
              <hr />
              <div>
                <h5>Bachelor in Computer Engineering</h5>
                <h6>University of California / 2014 - 2015</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
              <hr />
              <div>
                <h5>Computer Science</h5>
                <h6>International University / 2013 - 2014</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
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
              <div>
                <h5>Sr. Font End Developer</h5>
                <h6>Apple In / 2020 - current</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
              <hr />
              <div>
                <h5>Jr. Font End Developer</h5>
                <h6>Dribbble Inc / 2018 - 2020</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
              <hr />
              <div>
                <h5>HTML Developer</h5>
                <h6>Adobe Inc / 2017 - 2018</h6>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <br />
                  Lorem ipsum has been the dummy text.
                </p>
              </div>
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
