import React, { Fragment } from "react";
import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";
import classes from "./Header.module.css";

import placeHolderImg from "../../../assets/placeholderimg.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <HeaderLogo />
        <HeaderNav />
      </header>
      <div>
        <img
          src={placeHolderImg}
          alt="stylized computer art"
          className={classes.header__img}
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
