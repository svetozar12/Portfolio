import React, { useState } from "react";
import contactInfo from "../../data/contactInfo";
import { VscInfo } from "react-icons/vsc";
import emailjs from "emailjs-com";
function Contact() {
  const [data, setData] = useState(contactInfo);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m20dnx9",
        "template_57pdgkd",
        e.target,
        "user_SelMTnxyCjkXNj0ZJoAri",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }
  return (
    <>
      <div className="contact-me" id="contacts">
        <article>
          <p>
            Bellow you can see all the info you need to know to contact with me
            also you can send me an message if you want to hire me or have an
            project which i can make.
          </p>
        </article>
        <div className="boxi">
          <div className="mini-boxi">
            {data.map((contactInfo) => {
              const { id, first, second } = contactInfo;
              return (
                <div key={id} className="icons-info">
                  <VscInfo />
                  <div className="info">
                    <p>{first}</p>
                    <p>{second}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="outer-form">
          <div className="inner-form">
            <form onSubmit={sendEmail}>
              <label>
                Message me
                <div className="underline-form-black"></div>
              </label>
              <input
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Name")}
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Email")}
                placeholder="Email"
                name="email"
              />
              <input
                type="text"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Subject")}
                placeholder="Subject"
                name="subject"
              />
              <br />
              <textarea
                name=""
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Message")}
                placeholder=" Message"
                cols="25"
                rows="5"
                name="message"
              ></textarea>
              <br />
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
