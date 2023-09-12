import React from "react";
import { Navbar, Hello } from "../components";

const Home = () => {
  return (
    <>
      <div class="modal">
        <div class="modal-content roboto">
          <h2 className="">Pagina en desarrollo</h2>
          <p>:D</p>
        </div>
      </div>
      <Navbar />
      <Hello />
    </>
  );
};

export { Home };
