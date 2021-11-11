import React, { Fragment } from "react";
import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";
import classes from "./Header.module.css";
import HeaderImage from "./HeaderImage";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <HeaderLogo />
        <HeaderNav />
      </header>
      <HeaderImage />
    </Fragment>
  );
};

export default Header;
