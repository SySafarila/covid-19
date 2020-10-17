import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    document.title = "Covid-19 | Global";
  });
  return (
    <div className="border-b border-gray-800 container mx-auto">
      <ul className="flex justify-center">
        <li className="mx-1">
          <NavLink to="/global" activeClassName="text-blue-400">
            Global
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink to="/globalll" activeClassName="text-blue-400">
            404
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
