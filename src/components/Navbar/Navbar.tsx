import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";

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
      <h1 className="navbar__title">BP testing</h1>
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
