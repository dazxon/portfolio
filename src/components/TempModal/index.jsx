import React, { useEffect } from "react";
import "./style.tempmodal.css";

const TempModal = () => {
  useEffect(() => {
    // Agregar la clase 'moved-modal' después de 5 segundos
    const timer = setTimeout(() => {
      const modal = document.querySelector(".modal");
      modal.classList.toggle("moved-modal");
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte antes de que se cumplan los 5 segundos
  }, []);
  return (
    <div class="modal">
      <div class="modal-content roboto">
        <h2 className="">Pagina en desarrollo</h2>
        <p>:D</p>
      </div>
    </div>
  );
};

export { TempModal };
