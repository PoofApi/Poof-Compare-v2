import React, { useState } from "react";
import FooterComponent from "../FooterComponent";
import HeaderComponent2 from "../HeaderComponent2";
import "./contact.css";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    // db.collection("contacts")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Your message has been submitted👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contactComponentPage">
        <HeaderComponent2 />
        <div className="container contactPageContainer">
            <form className="form" onSubmit={handleSubmit}>
            <h1 style={{textAlign: "center"}}>Contact Us 🤳</h1>

            
            <div className="row contactRow" style={{position: "relative", right: "2vw"}}>
                <div className="col-4">
                    <input 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            

                <div className="col-4">
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="col-4">
                    <input 
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

            </div>

    
            <div className="row contactRow">
                <div className="col-12 messageText">
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Submit
            </button>
            </form>
        </div>
        <FooterComponent />
    </div>
  );
};

export default ContactComponent;