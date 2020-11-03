import React, { useState } from "react";
import { db } from "../../firebase";
import FooterComponent from "../FooterComponent";
import HeaderComponent2 from "../HeaderComponent2";
import "./contact.css";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const submitMsgTransition = () => {
    setTimeout(function(){
      document.querySelector('.contactSubmitWord').style.display = 'block';
      document.querySelector('.successSubmit').style.display = 'none';
    }, 5000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("poofContactMessages")
    .add({
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(() => {
      setLoader(false);
      document.querySelector('.contactSubmitWord').style.display = 'none';
      document.querySelector('.successSubmit').style.display = 'block';
      submitMsgTransition();
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

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
            <h1 className="mt-4" style={{textAlign: "center"}}>Contact Us 🤳</h1>
            <h5>Do you have any comments, suggestions, or questions for Poof? 
            We value anything and everything our users have to say, good or bad.
            Or perhaps you're a business interested in having a product featured through us. Either way,
            we'd love to hear what you have to say! &#128516;
            </h5>
            
            <div className="row contactRow justify-content-center">
                <div className="col-8 col-md-3">
                    <input 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            

                <div className="col-8 col-md-3">
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="col-8 col-md-3">
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
                className="contactSubmitBtn"
                type="submit"
            >
                { loader ? 
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
                :
                <div>
                    <span className="contactSubmitWord">Submit</span>
                    <span className="successSubmit">Message Successfully Sent! &#128077;</span>
                </div>

                }
                
            </button>
            </form>
        </div>
        <FooterComponent />
    </div>
  );
};

export default ContactComponent;