import React, { Fragment } from "react";
import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";
import classes from "./Header.module.css";
import headerImg from "../../../assets/placeholderimg3.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <HeaderLogo />
        <HeaderNav />
      </header>
      <img
        src={headerImg}
        alt="stylized computer art"
        className={classes.header__img}
      ></img>
    </Fragment>
  );
};

export default Header;
