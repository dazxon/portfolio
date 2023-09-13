import React from "react";
import "./style.aboutme.css";

const AboutMe = () => {
  return (
    <section id="about">
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
            I'm a <strong>systems student at ORT</strong> with experience in
            software development. I worked at Obux before taking on the
            challenge of becoming a <strong>Full Stack</strong> developer
            through the intensive Bootcamp at Plataforma 5. During this program,
            which consisted of over 800 hours, I acquired skills in key
            technologies such as{" "}
            <strong>MongoDB, Express.js, React.js, and Node.js</strong>, while
            also using agile methodologies like <strong>Scrum</strong> and
            engaging in <strong>pair programming</strong>. My experience at Obux
            and my training in the Bootcamp have provided me with a solid
            foundation for <strong>Full Stack</strong> development. I am now
            actively seeking a position in the IT sector at a company that
            values teamwork and, above all, professional growth.
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
