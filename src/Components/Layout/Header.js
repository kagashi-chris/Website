import React, { Fragment } from "react";
import HeaderNav from "./HeaderNav";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <h1>LOGO</h1>
        <HeaderNav />
      </header>
      <div>
        <img src="" alt=""></img>
      </div>
    </Fragment>
  );
};

export default Header;
