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
  const menuClass = "menu";
  const activeMenuClass= "menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}}to={'/'} onClick={()=>handlemenuclick(0)}>
            <p className= {selectmenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/oders'} onClick={()=>handlemenuclick(1)}>
            <p className= {selectmenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/holdings'} onClick={()=>handlemenuclick(2)}>
            <p className= {selectmenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <p><Link style={{textDecoration:"none"}}to={'/positions'} onClick={()=>handlemenuclick(3)}>
            <p className= {selectmenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link></p>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/funds'} onClick={()=>handlemenuclick(4)}>
            <p className= {selectmenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}}to={'/apps'} onClick={()=>handlemenuclick(5)}>
            <p className= {selectmenu === 5 ? activeMenuClass : menuClass}>Apps</p>
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
