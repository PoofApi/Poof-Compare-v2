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
        <div></div>
    );
}

export default CookiesComponent;
