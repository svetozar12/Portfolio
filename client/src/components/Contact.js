import React, { useState } from "react";
import contactInfo from "./data/contactInfo";
import { VscInfo } from "react-icons/vsc";
function Contact() {
  const [data, setData] = useState(contactInfo);
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

        <form action="">
          <label>
            Message me
            <div className="underline-form-black"></div>
          </label>
          <input
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Name")}
            type="text"
            placeholder="Name"
            name=""
            id=""
          />
          <input
            type="email"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Email")}
            placeholder="Email"
            name=""
            id=""
          />
          <input
            type="text"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Subject")}
            placeholder="Subject"
            name=""
            id=""
          />
          <br />
          <textarea
            name=""
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Message")}
            placeholder=" Message"
            id=""
            cols="25"
            rows="5"
          ></textarea>
          <br />
          <button type="submit">Send message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
