import React from "react";
import "./MainPageStyles.css";

// Import Components
import SidePanel from "../../components/sidePanel/SidePanel";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainBody from "../../components/allMainPage/MainBody/MainBody";

// Main Page => Navigation bar on Left => Posts Section in Center => User Panel on Right

function MainPage(props) {
  return (
    <div id="section-mainpage-div">
      <div id="subsection-mainpage-navbar">
        <NavigationBar
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
      <div id="subsection-mainpage-posts">
        <MainBody
          userDetails={props.userDetails}
        />
      </div>
      <div id="subsection-mainpage-sidepanel">
        <SidePanel
          userDetails={props.userDetails}
        />
      </div>
    </div>
  );
}

export default MainPage;
