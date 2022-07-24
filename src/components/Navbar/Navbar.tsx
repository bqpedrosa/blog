import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

export const Navbar: React.FC = () => {
  let location = useLocation();

  const navBarItems = [
    { name: "Home", route: "/" },
    { name: "About us", route: "/about" },
    { name: "Contact us", route: "/contact" },
  ];

  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <span className="navbar__title">bp journal</span>
      <ul className="navbar__items">
        {navBarItems.map(({ name, route }) => (
          <li
            className={`${
              route === pathName ? "navbar__items-item--active" : ""
            } navbar__items-item`}
            key={name}
          >
            <Link to={route}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
