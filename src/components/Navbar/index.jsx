import { useCallback } from "react";
import classNames from "classnames";
import { GiMountains } from "react-icons/gi";

import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getHref = useCallback((item) => {
    switch (item) {
      case "Home":
        return "/";
      case "Discovers":
        return "/Discover";
      case "FAQ":
        return "/Faq";
    }
  }, []);

  return (
    <nav className="hidden shadow-lg md:flex flex-row items-center z-50 sticky justify-between px-8 h-18 rounded-b-3xl bg-white">
      <span className="text-green-600 text-5xl py-3">
        <GiMountains />
      </span>
      <ul className="flex flex-row self-end h-12">
        {navigationData.map((item, index) => (
          <Link key={index} href={getHref(item)} passHref={true}>
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;