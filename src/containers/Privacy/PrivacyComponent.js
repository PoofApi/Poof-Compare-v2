import React, { useEffect } from 'react';
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


                <p>
                    Thank you for choosing to be part of our community at Poof! Price Compare, doing business as Poof! ("<strong>Poof!</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at epalumbo@poofapi.com.
                </p>
                <p>
                    When you visit our website https://www.poofpricecompare.com (the "<strong>Website</strong>"), and more generally, use any of our services (the "<strong>Services</strong>", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.

                </p>
                <p>
                    This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
                </p>
                <strong>
                    Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
                </strong>

                <h4 className="privacyHeading">
                    TABLE OF CONTENTS
                </h4>

                    1. WHAT INFORMATION DO WE COLLECT?
                    2. HOW DO WE USE YOUR INFORMATION?
                    3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    7. HOW LONG DO WE KEEP YOUR INFORMATION?
                    8. DO WE COLLECT INFORMATION FROM MINORS?
                    9. WHAT ARE YOUR PRIVACY RIGHTS?
                    10. CONTROLS FOR DO-NOT-TRACK FEATURES
                    11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    12. DO WE MAKE UPDATES TO THIS NOTICE?
                    13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    14. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?

                <h4 className="privacyHeading">
                    1. WHAT INFORMATION DO WE COLLECT?
                </h4>
                <h6 className="privacySubHeading">
                    Personal information you disclose to us
                </h6>

                    In Short:  We collect personal information that you provide to us.

                    We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.

                    The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:

                    All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
                <h6 className="privacySubHeading">
                    Information automatically collected                    
                </h6>

                    In Short:  Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.

                    We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.

                    Like many businesses, we also collect information through cookies and similar technologies.

                    The information we collect includes:
                    Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
                    Device Data. We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
                <h4 className="privacyHeading">
                    2. HOW DO WE USE YOUR INFORMATION?
                </h4>

                    In Short:  We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.

                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.

                    We use the information we collect or receive:
                    To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.
                    To post testimonials. We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at __________ and be sure to include your name, testimonial location, and contact information.
                    Request feedback. We may use your information to request feedback and to contact you about your use of our Website.
                    To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.
                    To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.
                    To send administrative information to you. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.
                    To protect our Services. We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).
                    To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.
                    To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.

                    Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website

                    Administer prize draws and competitions. We may use your information to administer prize draws and competitions when you elect to participate in our competitions.

                    To deliver and facilitate delivery of services to the user. We may use your information to provide you with the requested service.

                    To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.\
                    To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).
                    Deliver targeted advertising to you. We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
                    For other business purposes. We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.
                <h4 className="privacyHeading">
                    3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </h4>

                    In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.

                    We may process or share your data that we hold based on the following legal basis:
                    Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                    Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                    Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                    Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                    Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                    More specifically, we may need to process your data or share your personal information in the following situations:
                    Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    Business Partners. We may share your information with our business partners to offer you certain products, services or promotions.
                <h4 className="privacyHeading">
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </h4>

                    In Short:  We may use cookies and other tracking technologies to collect and store your information.

                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                <h4 className="privacyHeading">
                    5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?     
                </h4>

                    In Short:  We may transfer, store, and process your information in countries other than your own.

                    Our servers are located in. If you are accessing our Website from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.

                    If you are a resident in the European Economic Area, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.
                <h4 className="privacyHeading">
                    6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </h4>

                    In Short:  We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.

                    The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Website. You should review the policies of such third parties and contact them directly to respond to your questions.
                <h4 className="privacyHeading">
                    7. HOW LONG DO WE KEEP YOUR INFORMATION?
                </h4>

                    In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.

                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than __________.

                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                <h4 className="privacyHeading">
                    8. DO WE COLLECT INFORMATION FROM MINORS?
                </h4>

                    In Short:  We do not knowingly collect data from or market to children under 18 years of age.

                    We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at __________.
                <h4 className="privacyHeading">
                    9. WHAT ARE YOUR PRIVACY RIGHTS?
                </h4>

                    In Short:  You may review, change, or terminate your account at any time.
                    
                    If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.

                    If you are a resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.

                    If you have questions or comments about your privacy rights, you may email us at epalumbo@poofapi.com.

                    Account Information

                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.

                    Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit http://www.aboutads.info/choices/.

                    Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
                <h4 className="privacyHeading">
                    10. CONTROLS FOR DO-NOT-TRACK FEATURES
                </h4>

                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. 
                <h4 className="privacyHeading">
                    11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </h4>

                    In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.

                    California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.

                    If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                <h4 className="privacyHeading">
                    12. DO WE MAKE UPDATES TO THIS NOTICE?     
                </h4>

                    In Short:  Yes, we will update this notice as necessary to stay compliant with relevant laws.

                    We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                <h4 className="privacyHeading">
                    13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?     
                </h4>

                    If you have questions or comments about this notice, you may email us at __________ or by post to:

                    Poof! Price Compare
                    32 Taft Street
                    Nutley, NJ 07110
                    United States
                <h4 className="privacyHeading">
                    14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?     
                </h4>

                    Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here. We will respond to your request within 30 days.
                    This privacy policy was created using Termly’s Privacy Policy Generator.
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
   