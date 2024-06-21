import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnLogin ,setbtnLogin] = useState("Login")
  //const setbtnLogin = "Logout"
//useEffect


useEffect(() => {
  console.log("hi");
})

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="title-container">FOOD HOOD</div>
      <div className="navmenu">
      <ul>
        <li>Home</li>
        <li>Contat us</li>
        <li>Cart</li>
        <button className="login" onClick= {() => {setbtnLogin("Logout")}}>{btnLogin}</button>
      </ul>
      </div>
    </div>
  );
};
export default Header;
