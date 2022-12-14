import React from "react";
import "./sidenav.css";	import "./sidenav.css";
import { NavLink } from "react-router-dom";


export function SideNav() {
  function getClassName({ isActive }) {
    return `navlink ${isActive ? "active" : ""}`;
  }

  return (
    <div className="sidebar">
      <NavLink className={getClassName} to="/">
        Dashboard
      </NavLink>
      <NavLink className={getClassName} to="/tasks">
        Tasks
      </NavLink>
    </div>
  );
}
