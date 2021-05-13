import React from "react";
import styles from "./Feature.module.scss";

function Feature({
  icon = "icon is required",
  heading = "heading is reqired",
  subheading = "subheading s required",
}) {
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.contentWrapper}>
        <h3>{heading}</h3>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

export default Feature;
