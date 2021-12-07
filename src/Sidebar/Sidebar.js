import React from "react";
import { CDBSidebarHeader, CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import img1 from "../images/Frame 8087.png";
import img2 from "../images/Frame 8088.png";
import img3 from "../images/Frame 8089.png";
import img4 from "../images/Frame 8090.png";
import img5 from "../images/Group 7484.png";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "grey";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "maroon";
    setShowText(false);
  };
  return (
    <div
      style={{
        display: "initial",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <div
        style={{
          textColor: "#fff",
          minWidth: "110px",
          width: "10px",
          height: "100vh",
          backgroundColor: "#263544",
        }}
      >
        <CDBSidebarHeader
          prefix={
            <i>
              <img src={img5} alt="hospital" />
            </i>
          }
        ></CDBSidebarHeader>

        {/* <CDBSidebarContent className=""> */}
        {/* <CDBSidebarMenu> */}
        <NavLink exact to="/hospital" activeClassName="">
          <CDBSidebarMenuItem>
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={img1}
              alt="hospital"
            />
          </CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/wishlist" activeClassName="">
          <CDBSidebarMenuItem>
            <img src={img2} alt="wishlist" />
          </CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/profile" activeClassName="">
          <CDBSidebarMenuItem>
            <img src={img3} alt="profile" />
          </CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/logout" activeClassName="">
          <CDBSidebarMenuItem>
            <img src={img4} alt="logout" />
          </CDBSidebarMenuItem>
        </NavLink>
        {/* </CDBSidebarMenu> */}
        {/* </CDBSidebarContent> */}
      </div>
    </div>
  );
};

export default Sidebar;
