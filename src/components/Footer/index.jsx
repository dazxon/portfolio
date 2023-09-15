import React from "react";
import "./style.footer.css";

const Footer = () => {
  return (
    <footer class="popins">
      <div>
        <p>
          Copyright &#169; <span>Agustin</span>. All Rights Reserved
        </p>
      </div>

      <section class="sectionIcon">
        <a href="#home">
          <i class="fa-solid fa-angle-up"></i>
        </a>
      </section>

      <div>
        <p>
          Designed by <span>Agustin Donalisio</span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
