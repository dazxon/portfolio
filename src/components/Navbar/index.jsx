import React from "react";
import "./style.navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar roboto">
        <section class="sectionNav">
          <h3>CALLUM</h3>

          <ul class="liNav">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#resume">resume</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>

          <ul>
            <li class="iconitoNav">
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li class="iconitoNav">
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li class="iconitoNav">
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export { Navbar };
