import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    document.title = "Covid-19 | Global";
  });
  return (
    <div className="border-b border-gray-800 container mx-auto">
      <ul className="flex justify-center py-2">
        <li className="mx-1">
          <NavLink
            to="/global"
            className="text-gray-400"
            activeClassName="text-blue-400"
          >
            Global
          </NavLink>
        </li>
        <li className="mx-1">
          <NavLink
            to="/indonesia"
            className="text-gray-400"
            activeClassName="text-blue-400"
          >
            Indonesia
          </NavLink>
        </li>
        <li className="mx-1">
          <a
            href="http://instagram.com/sysafarila"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400"
          >
            @sysafarila
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
