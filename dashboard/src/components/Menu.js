import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectmenu,setSelectmenu]=useState(0);
  const[isProfileDropdown,setIsProfileDropdown]=useState(0);

  const handlemenuclick=(index)=>{
    setSelectmenu(index);
  }

  const handleProfileClick=(index)=>{
    setIsProfileDropdown(!setIsProfileDropdown);
  }


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}}to={'/'} onClick={()=>handlemenuclick(0)}>
            <p>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/oders'} onClick={()=>handlemenuclick(1)}>
            <p >Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/holdings'} onClick={()=>handlemenuclick(2)}>
            <p>Holdings</p>
            </Link>
          </li>
          <li>
            <p><Link style={{textDecoration:"none"}}to={'/positions'} onClick={()=>handlemenuclick(3)}>
            <p>Positions</p>
            </Link></p>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/funds'} onClick={()=>handlemenuclick(4)}>
            <p>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/apps'} onClick={()=>handlemenuclick(5)}>
            <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
