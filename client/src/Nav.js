import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://fordraptor.us/wp-content/uploads/2021/02/logo.jpg"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
