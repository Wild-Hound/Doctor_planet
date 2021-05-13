import React from "react";
import Feature from "../../../Components/Feature/Feature";
import styles from "./FeatSec.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faMicroscope,
  faAward,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

function FeatSec() {
  return (
    <div className={styles.featureWrapper}>
      <Feature
        icon={<FontAwesomeIcon icon={faMedal} />}
        heading="Best Doctors"
        subheading="National Awards 13+"
      />
      <Feature
        icon={<FontAwesomeIcon icon={faMicroscope} />}
        heading="Seasoned Players"
        subheading="In Service For 18 Years"
      />
      <Feature
        icon={<FontAwesomeIcon icon={faAward} />}
        heading="Top Medical Facility"
        subheading="Specialized Licence 7"
      />
      <Feature
        icon={<FontAwesomeIcon icon={faFunnelDollar} />}
        heading="Well Funded R&D "
        subheading="Total Funded 375K+"
      />
    </div>
  );
}

export default FeatSec;
