import React from "react";
import styles from "./HeroSec.module.scss";
import heroDoc from "../../../Images/hero_doc.png";
import AppForm from "./AppForm/AppForm";

function HeroSec() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.docSec}>
        <img src={heroDoc} className={styles.heroDoc} />
        <h1 className={styles.heroHeading}>
          Best Doctors With Proven Qualification
        </h1>
      </div>
      <div className={styles.callToAct}>
        <AppForm />
      </div>
    </div>
  );
}

export default HeroSec;
