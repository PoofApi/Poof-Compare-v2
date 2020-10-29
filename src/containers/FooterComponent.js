import React from 'react'
import { Link } from 'react-router-dom';


export default function FooterComponent() {

    function handleSubmit3(word){
        return word;
    };

    return (
        <div className="poofDesktopFooter">
            <div className="container footerContainer">
                <ul className="footerTitles">
                    <li>
                        <h4>Search Categories</h4>
                        <ul>
                            <li onClick={() => handleSubmit3("electronics")}>Electronics</li>
                            <li onClick={() => handleSubmit3("books")}>Books</li>
                            <li onClick={() => handleSubmit3("clothes")}>Clothes</li>
                            <li onClick={() => handleSubmit3("games")}>Games</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Links</h4>
                        <ul>
                            <li><Link className="aboutLinkFooter" to={'/aboutPoof'}>About</Link></li>
                            <li>Features</li>
                            <li>Contact Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </li>
                </ul>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© 2020 Poof! Price Compare</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
