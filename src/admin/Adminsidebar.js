import React from "react";
import { NavLink } from "react-router-dom";

const Adminsidebar = () => {
  const sidebarStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "12px 0",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkBaseStyle = {
    display: "block",
    padding: "12px 18px",
    margin: "6px 10px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#374151",
    transition: "background-color 0.2s ease",
  };

  const activeStyle = {
    backgroundColor: "#e5e7eb",
    fontWeight: "600",
  };

  return (
    <div style={sidebarStyle}>
      <ul style={ulStyle}>
        <li>
          <NavLink
            to=""
            end
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Add Data
          </NavLink>
        </li>

        <li>
          <NavLink
            to="deletecrud"
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Delete / Edit Data
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Adminsidebar;
