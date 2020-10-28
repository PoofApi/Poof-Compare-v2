import React from 'react'
import HeaderComponent2 from './HeaderComponent2'

export default function AboutPageRoute() {
    return (
        <div>
            <HeaderComponent2 />
            <div className="container aboutContainer">
                <h2 className="aboutTitle">
                    About Us / FAQ
                </h2>
                <ul className="aboutListItems">
                    <div className="row aboutRow">
                        <div className="offset-2 col-9">
                            <li>
                                <h4 className="listItemTitle">Hello and Welcome to Poof!</h4>
                                <p className="listItemContent">
                                    Poof! is here to help you shop online in the most efficient and comprehensive way!
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="offset-2 col-9">
                            <li>
                                <h4 className="listItemTitle">Your first stop to find the best deals</h4>
                                <p className="listItemContent">
                                    Think of Poof! as your first stop in finding a product online. Poof! helps ensure confidence in making the right purchase for the right price.
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="offset-2 col-9">
                            <li>
                                <h4 className="listItemTitle">Save time and avoid shopping headaches</h4>
                                <p className="listItemContent">
                                    Rather than search for the same item on 10 different sites and compare said item on 10 different tabs, just do it all in one place and with just one search!
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="offset-2 col-9">
                            <li>
                                <h4 className="listItemTitle">So........What's in it for Poof? How does this all work?</h4>
                                <p className="listItemContent">
                                    Poof's mission is to provide you with the smoothest online shopping experience. We aim to get you from searching for a product to checkout in the fastest, most reliable way possible, while ensuring you're paying a minimal price. 
                                    By directing you to a product and consequently a 
                                    seller, Poof! is able to receive an affiliate commision from the seller, with no extra cost, whatsoever, to you the buyer.
                                </p>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}
