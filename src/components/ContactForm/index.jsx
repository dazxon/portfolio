import React, { useState } from "react";
import "./style.contactform.css";

const ContactForm = () => {
  const [sended, setSended] = useState(false);

  const handleSend = () => {
    setSended((e) => !e);
  };

  return (
    <section class="section9 popins" id="contact">
      <section class="containerDivForm">
        {/* <!--DIV IZQUIERDO--> */}
        <div class="divIzquierdoForm">
          <h2>Let's get in touch</h2>
          <p>
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>

          <h6>Living In:</h6>
          <p>Capital Federal, Buenos Aires, ARG.</p>

          <h6>Call:</h6>
          <p>(+54) 11 3421 1305</p>

          {/* <!--ICONOS REDES SOCIALES--> */}
          <div class="divFormSociales">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-light fa-basketball"></i>
          </div>
        </div>

        {/* <!--DIV DERECHO--> */}

        {!sended ? (
          <div class="divDerechoForm">
            <h2>Have a project in mind?</h2>

            <h5>What is your name:</h5>
            <input
              type="text"
              name=""
              id=""
              className="inputs"
              maxLength="40"
            />

            <h5>Your Email Address:</h5>
            <input
              type="text"
              name=""
              id=""
              className="inputs"
              maxLength={"50"}
              required
            />

            <h5>How can i help you?:</h5>
            <textarea type="textarea" className="inputs" rows="" />

            <button
              type="submit"
              class="buttonWorks"
              onClick={() => handleSend()}
            >
              Send
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        ) : (
          <div className="ty-div">
            <h3>Thanks for reaching out!</h3>
            <h6>Your message has been received. We'll get back to you soon.</h6>
          </div>
        )}
      </section>
    </section>
  );
};

export { ContactForm };
