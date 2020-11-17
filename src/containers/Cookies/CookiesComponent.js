import React, { useEffect } from 'react';
import FooterComponentSearchPage from '../FooterComponentSearchPage';
import HeaderComponent2 from '../HeaderComponent2';
import './cookies.css';

const CookiesComponent = () => {

    useEffect(() => {
        document.querySelector('body').scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
    
        let menu = document.querySelector(".hideScrollerPrivacy");
        let ele = document.querySelector("body");
    
        ele.addEventListener("scroll", () => {
            let y = ele.scrollTop;
            
            if (y >= 100) {
                if(menu){
                    menu.className = "desktopTopScrollerPrivacy";
                }
            } else {
                if(menu){
                    menu.className = "hideScrollerPrivacy"
                }
            }
          }, true);
    
      }); 

    return(
        <div className="cookiesComponentPage">
            <div id="desktopTopPrivacy"></div>
            <HeaderComponent2 />
            <div className="container cookiesPageContainer">

            <h1 className="cookiesTitle">COOKIE POLICY</h1>
                <strong className="dateUpdatedAndContactInfo">
                    Last updated November 15, 2020
                </strong>

            <div className="cookiesParagraph">
                <p>
                    This Cookie Policy explains how Poof! ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", and "<strong>our</strong>") uses cookies and similar technologies to recognize you when you visit our websites at <a href="https://www.poofpricecompare.com" target="_blank" className="poofCookiesLink">https://www.poofpricecompare.com</a>, ("<strong>Websites</strong>"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
                <p>
                    In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                </p>
            </div>
            <h4 className="cookiesHeading">
                What are cookies?
            </h4>
            <div className="cookiesParagraph">
                <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                    Cookies set by the website owner (in this case, Poof!) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                </p>
            </div>
            <h4 className="cookiesHeading">
                Why do we use cookies?
            </h4>
            <div className="cookiesParagraph">
                <p>
                    We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.
                </p>
                <p>
                    The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
                </p>
            </div>
            <h4 className="cookiesHeading">
                How can I control cookies?
            </h4>
            <div className="cookiesParagraph">
                <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                </p>
                <p>
                    The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                </p>
                <p>
                    In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a className="poofCookiesLink" href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices/</a> or <a className="poofCookiesLink" href="http://www.aboutads.info/choices/" target="_blank"></a><a className="poofCookiesLink" href="http://www.youronlinechoices.com" target="_blank">http://www.youronlinechoices.com</a>.
                </p>
                <p>
                    The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
                </p>
            </div>
<h6 className="cookiesSubHeading">
    Essential website cookies:
</h6>
<div className="cookiesParagraph">
    <p>
        These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
    </p>
    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: __tlbcpv</li>
            <li>Purpose: Used to record unique visitor views of the consent banner.</li>
            <li>Provider: .termly.io</li>
            <li>Service: Termly <a className="poofCookiesLink" href="https://termly.io/our-privacy-policy/" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 1 year</li>
        </ul>
    </div>
</div>
<h6 className="cookiesSubHeading">
    Analytics and customization cookies:
</h6>
<div className="cookiesParagraph">
    <p>
        These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.
    </p>
    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: _ga</li>
            <li>Purpose: It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.</li>
            <li>Provider: .poofpricecompare.com</li>
            <li>Service: Google Analytics <a className="poofCookiesLink" href="https://policies.google.com/privacy" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 1 year 11 months 29 days</li>
        </ul>
    </div>

    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: _gid</li>
            <li>Purpose: Keeps an entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session.</li>
            <li>Provider: .poofpricecompare.com</li>
            <li>Service: Google Analytics <a className="poofCookiesLink" href="https://policies.google.com/privacy" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 1 day</li>
        </ul>
    </div>

    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: _gat#</li>
            <li>Purpose: Enables Google Analytics regulate the rate of requesting. It is a HTTP cookie type that lasts for a session.</li>
            <li>Provider: .poofpricecompare.com</li>
            <li>Service: Google Analytics <a className="poofCookiesLink" href="https://policies.google.com/privacy" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 1 minute</li>
        </ul>
    </div>
</div>

<div className="cookiesSubHeading">
    Advertising cookies:
</div>
<div className="cookiesParagraph">
    <p>
        These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
    </p>

    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: __gads</li>
            <li>Purpose: Set by Google Ad Manager on a site to help with measuring how a user interacts with the ads on that domain and preventing the same ads from being shown to the user too many times.</li>
            <li>Provider: .poofpricecompare.com</li>
            <li>Service: Google AD Manager <a className="poofCookiesLink" href="https://policies.google.com/privacy" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 1 year 24 days</li>
        </ul>
    </div>
    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: test_cookie</li>
            <li>Purpose: A session cookie used to check if the user’s browser supports cookies.</li>
            <li>Provider: .doubleclick.net</li>
            <li>Service: DoubleClick <a className="poofCookiesLink" href="https://policies.google.com/privacy" target="_blank">View Service Privacy Policy</a></li>
            <li>Country: United States</li>
            <li>Type: http_cookie</li>
            <li>Expires in: 15 minutes</li>
        </ul>
    </div>
    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: google_experiment_mod</li>
            <li>Purpose: Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.</li>
            <li>Provider: www.poofpricecompare.com</li>
            <li>Service: Google  </li>
            <li>Country: United States</li>
            <li>Type: html_local_storage</li>
            <li>Expires in: persistent</li>
        </ul>
    </div>
    <div className="cookiesBox">
        <ul className="cookiesUnorderedListItem">
            <li>Name: goog_pem_mod</li>
            <li>Purpose: Used to send data to Google Analytics about the visitor’s device and behaviour. It tracks the visitor across devices and marketing channels.</li>
            <li>Provider: www.poofpricecompare.com</li>
            <li>Service: Google  </li>
            <li>Country: United States</li>
            <li>Type: html_local_storage</li>
            <li>Expires in: persistent</li>
        </ul>
    </div>
</div>

    {/* <h6 className="cookiesSubHeading">
        Unclassified cookies:
    </h6>
    <div className="cookiesParagraph">
        <p>
            These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.
        </p>
        
    </div> */}
    <h4 className="cookiesHeading">
        What about other tracking technologies, like web beacons?
    </h4>
    <div className="cookiesParagraph">
        <p>
            Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
        </p>
    </div>

    <h4 className="cookiesHeading">
        Do you use Flash cookies or Local Shared Objects?
    </h4>
    <div className="cookiesParagraph">
        <p>
            Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.
        </p>
        <p>
            If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a className="poofCookiesLink" href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_blank">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a className="poofCookiesLink" href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" target="_blank">Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
        </p>
        <p>
            Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
        </p>
    </div>

    <h4 className="cookiesHeading">
        Do you serve targeted advertising?
    </h4>
    <div className="cookiesParagraph">
        <p>
            Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.
        </p>
    </div>

    <h4 className="cookiesHeading">
        How often will you update this Cookie Policy?
    </h4>
    <div className="cookiesParagraph">
        <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
        <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
        </p>
    </div>

    <h4 className="cookiesHeading">
        Where can I get further information?
    </h4>
    <div className="cookiesParagraph">
        <p>
            If you have any questions about our use of cookies or other technologies, please email us at epalumbo@poofapi.com or by post to:
        </p>
        <p>
            Poof!
            __________
            __________
            Phone: __________
            This cookie policy was created using Termly’s Cookie Consent Manager.
        </p>
    </div>

            </div>
            <a id="myID" className="hideScrollerPrivacy" href="#desktopTopPrivacy">
            Return to Top
            </a>
        <FooterComponentSearchPage />
        </div>
            
    );
}

export default CookiesComponent;
