import React from "react";
import classes from "./Section1.module.css";
import Section1Panel from "./Section1Panels";

const Section1 = () => {
  return (
    <section className={classes.container} id="skill">
      <h2 className={classes.skillsText}>Skills</h2>
      <p className={classes.section1Text}>WHAT CAN I OFFER?</p>
      <Section1Panel />
    </section>
  );
};

export default Section1;
