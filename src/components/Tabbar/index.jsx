import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass, AiFillQuestionCircle } from "react-icons/ai";

import styles from "./Tabbar.module.css";
import Link from "next/link";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Discover":
        return <AiFillCompass />;
      case "FAQ":
        return <AiFillQuestionCircle />;
    }
  }, []);

  const getHref = useCallback((item) => {
    switch (item) {
      case "Home":
        return "/";
      case "Discover":
        return "/Discover";
      case "FAQ":
        return "/Faq";
    }
  }, []);


  return (
    <nav className="flex z-20 shadow-xl md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
      {navigationData.map((item, index) => (
        <Link key={index} href={getHref(item)} passHref={true}>
        <span
          key={index}
          className={classNames([
            styles.tabItem,
            currentRoute === item && styles.tabItemActive,
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className="mb-4 mt-4">{getTabIcon(item)}</span>
        </span>
        </Link>
      ))}
    </nav>
  );
};

export default Tabbar;