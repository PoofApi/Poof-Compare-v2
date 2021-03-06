import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterComponentSearchPage from '../FooterComponentSearchPage';
import HeaderComponent2 from '../HeaderComponent2';
import './privacy.css'

const PrivacyComponent = () => {

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

    return (
      <div className="privacyComponentPage">
        <div id="desktopTopPrivacy"></div>
        <HeaderComponent2 />
        <div className="container privacyPageContainer">
            <div>
                <h1 className="privacyTitle">PRIVACY NOTICE</h1>
                <strong className="dateUpdatedAndContactInfo">
                    Last updated November 10, 2020
                </strong>

                    <div className="privacyParagraph">
                        <p>
                            Thank you for choosing to be part of our community at Poof! Price Compare, doing business as Poof! ("<strong>Poof!</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at epalumbo@poofapi.com.
                        </p>
                        <p>
                            When you visit our website <a className="poofPrivacyLink" href="https://www.poofpricecompare.com">https://www.poofpricecompare.com</a> (the "<strong>Website</strong>"), and more generally, use any of our services (the "<strong>Services</strong>", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.

                        </p>
                        <p>
                            This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
                        </p>
                        <strong>
                            Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
                        </strong>
                    </div>

                <h4 className="privacyHeading">
                    TABLE OF CONTENTS
                </h4>
                    <ol className="tableList">
                        <li><a href="#1">WHAT INFORMATION DO WE COLLECT?</a></li>
                        <li><a href="#2">HOW DO WE USE YOUR INFORMATION?</a></li>
                        <li><a href="#3">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
                        <li><a href="#4">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                        <li><a href="#5">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></li>
                        <li><a href="#6">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a></li>
                        <li><a href="#7">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                        <li><a href="#8">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                        <li><a href="#9">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                        <li><a href="#10">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                        <li><a href="#11">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                        <li><a href="#12">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                        <li><a href="#13">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                        <li><a href="#14">HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                    </ol>
                <div className="parentTarget">
                    <h4 className="privacyHeading" >
                        1. WHAT INFORMATION DO WE COLLECT?
                    </h4>
                    <div className="targetID" id="1"></div>
                </div>
                <h6 className="privacySubHeading">
                    Personal information you disclose to us
                </h6>

                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short:</em></strong>  <em>We collect personal information that you provide to us.</em>
                    </p>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
                    </p>
                    <p>
                        The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <p>
                        All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
                    </p>
                </div>

                <h6 className="privacySubHeading">
                    Information automatically collected                    
                </h6>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short:</em></strong> <em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</em>
                    </p>
                        
                    <p>
                        We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
                    </p>
                    <p>
                        Like many businesses, we also collect information through cookies and similar technologies.
                    </p>
                    <p>
                        The information we collect includes:
                    </p>
                    <ul className="privacyUnorderedListItem">
                        <li>
                            <em>Log and Usage Data</em>. Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
                        </li>
                        <li>
                            <em>Device Data</em>. We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
                        </li>
                    </ul>
                </div>

                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        2. HOW DO WE USE YOUR INFORMATION?
                    </h4>
                    <div className="targetID" id="2"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em>
                    </p>
                    <p>
                    </p>
                        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                    <p>
                    </p>
                        We use the information we collect or receive:
                    
                        <ul className="privacyUnorderedListItem">
                            <li><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                            <li><strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please email us at epalumbo@poofapi.com and be sure to include your name, testimonial location, and contact information.</li>
                            <li><strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
                            <li><strong>To enable user-to-user communications.</strong>                 We may use your information in order to enable user-to-user communications with each user's consent.</li>
                            <li><strong>To manage user accounts.</strong>                 We may use your iformation for the purposes of managing our account and keeping it in working order.</li>
                            <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                            <li><strong>To protect our Services.</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
                            <li><strong>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</strong></li>
                            <li><strong>To respond to legal requests and prevent harm.</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                            <li><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website</li>
                            <li><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</li>
                            <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.</li>
                            <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                            <li><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "<a className="poofPrivacyLink" href="#9">WHAT ARE YOUR PRIVACY RIGHTS</a>" below).</li>
                            <li><strong>Deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
                            <li><strong>For other business purposes.</strong> We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</li>
                        </ul>
                </div>
                    
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                    </h4>
                    <div className="targetID" id="3"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em>
                    </p>
                        
                    <p>
                        We may process or share your data that we hold based on the following legal basis:
                    </p>
                        <ul className="privacyUnorderedListItem">
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                            <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                        </ul>           
                        <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>                 
                        <ul className="privacyUnorderedListItem">
                            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
                        </ul>         
                </div>
                    
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </h4>
                    <div className="targetID" id="4"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We may use cookies and other tracking technologies to collect and store your information.</em>
                    </p>
                        
                    <p>
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.

                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?     
                    </h4>
                    <div className="targetID" id="5"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We may transfer, store, and process your information in countries other than your own.</em>
                    </p>
                        
                    <p>
                        Our servers are located in. If you are accessing our Website from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "<a className="poofPrivacyLink" href="#3">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a>" above), in and other countries.
                    </p>
                    <p>
                        If you are a resident in the European Economic Area, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    </h4>
                    <div className="targetID" id="6"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.</em>
                    </p>
                      
                    <p>
                        The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Website. You should review the policies of such third parties and contact them directly to respond to your questions.
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        7. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </h4>
                    <div className="targetID" id="7"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
                    </p>
                        
                    <p>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                    </p>

                    {/*Previous full disclaimer*/}

                    {/* <p>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than __________.
                    </p> */}

                    <p>
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        8. DO WE COLLECT INFORMATION FROM MINORS?
                    </h4>
                    <div className="targetID" id="8"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>We do not knowingly collect data from or market to children under 18 years of age.</em>
                    </p>
                        
                    <p>
                        We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at epalumbo@poofapi.com
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        9. WHAT ARE YOUR PRIVACY RIGHTS?
                    </h4>
                    <div className="targetID" id="9"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>You may review, change, or terminate your account at any time.</em>
                    </p>
                        
                    <p>
                        If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a className="poofPrivacyLink" target="_blank" href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.

                    </p>
                    <p>
                        If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <a className="poofPrivacyLink" target="_blank" href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.

                    </p>
                    <p>
                        If you have questions or comments about your privacy rights, you may email us at epalumbo@poofapi.com.
                    </p>
                </div>
                <h6 className="privacySubHeading">
                    Account Information
                </h6>
                <div className="privacyParagraph">
                    <p>
                        If you would at any time like to review or change the information in your account or terminate your account, you can:
                        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
                    </p>
                    <p>
                        <strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit <a className="poofPrivacyLink" href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices/</a>.
                    </p>
                    <p>
                        <strong><u>Opting out of email marketing:</u></strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        10. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </h4>
                    <div className="targetID" id="10"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. 
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </h4>
                    <div className="targetID" id="11"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
                    </p>
                    <p>
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                    </p>
                    <p>
                        If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        12. DO WE MAKE UPDATES TO THIS NOTICE?     
                    </h4>
                    <div className="targetID" id="12"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        <strong><em>In Short: </em></strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
                    </p>
                        
                    <p>
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?     
                    </h4>
                    <div className="targetID" id="13"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        If you have questions or comments about this notice, you may email us at epalumbo@poofapi.com or message us through our contact page: <Link className="contactPageLink" to={'/contactPoof'}>here</Link>.
                    </p>
                </div>
                <div className="parentTarget">
                    <h4 className="privacyHeading">
                        14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?     
                    </h4>
                    <div className="targetID" id="14"></div>
                </div>
                <div className="privacyParagraph">
                    <p>
                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a className="poofPrivacyLink" href="https://app.termly.io/notify/9994e722-a234-42eb-af84-3cb42af0d8d4" target="_blank">here</a>.
                    </p>

                    {/*Previous un-edited disclaimer*/}

                    {/* <p>
                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a className="poofPrivacyLink" href="https://app.termly.io/notify/9994e722-a234-42eb-af84-3cb42af0d8d4" target="_blank">here</a>. We will respond to your request within 30 days.
                    </p> */}
                </div>
            </div>
        </div>
        <a id="myID" className="hideScrollerPrivacy" href="#desktopTopPrivacy">
            Return to Top
        </a>
        <FooterComponentSearchPage />
        </div>
    );
}

export default PrivacyComponent;
   