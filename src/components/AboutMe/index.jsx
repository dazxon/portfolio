import React from "react";
import "./style.aboutme.css";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="about">
      <div class="divTitle">
        <h6 class="upTitle">
          <span class="upTitleSub">about me</span>
        </h6>
        <h2 class="downTitle">Know Me More</h2>
      </div>
      <section class="sectionAboutMe popins">
        <div class="divHi">
          <h3>
            Hi, I'm
            <span> Agustin Donalisio</span>
          </h3>
          <p>
            I'm a <strong>systems student at ORT</strong> with prior experience
            in software development. Before embarking on the journey to become a
            <strong> Full Stack developer</strong>, I worked at
            <strong> Obux</strong>. I undertook an intensive course at
            Plataforma 5, which spanned over 800 hours, to acquire proficiency
            in key technologies, including
            <strong> MongoDB, Express.js, React.js, and Node.js</strong>. During
            the program, I also gained exposure to agile methodologies like
            <strong> Scrum</strong> and participated in{" "}
            <strong>pair programming </strong>
            sessions. My combined experience at Obux, along with the training I
            received during the course, has furnished me with a robust
            foundation in <strong>Full Stack development</strong>. Presently, I
            am enthusiastically pursuing opportunities within the IT sector,
            with a particular focus on companies that place a premium on
            collaborative teamwork and foster continuous professional growth
          </p>
        </div>
        <div class="divYears">
          <h2 class="number">3</h2>
          <h6 class="hSix">
            Years of <strong>Experience</strong>
          </h6>
        </div>
      </section>
      <section class="sectionBaseline popins">
        <div class="divAboutMeBaseline">
          <p>Name:</p>
          <span>Agustin Donalisio</span>
        </div>
        <div class="divAboutMeBaseline">
          <p>Email:</p>
          <span class="spanEmail">dev@adonalisio.com</span>
        </div>
        <div class="divAboutMeBaseline">
          <p>Date of birth:</p>
          <span>10 november, 1996</span>
        </div>
        <div class="divAboutMeBaseline">
          <p>From:</p>
          <span>Buenos Aires, ARG</span>
        </div>
      </section>
    </section>
  );
};

export { AboutMe };
