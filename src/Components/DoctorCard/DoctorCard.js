import React from "react";
import styles from "./DoctorCard.module.scss";
import docImg from "../../Images/hero_doc.png";

function DoctorCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHead}>
        <img src={docImg} />
        <div className={styles.docSubHeading}>
          <h4>Jane Doe</h4>
          <h4>MBBS(Neurosurgery)</h4>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p>
          This is alot of parahgraph,This is alot of parahgraph,This is alot of
          parahgraph ,This is alot of parahgraph ,This is alot of parahgraph
          ,This is alot of parahgraph ,This is alot of parahgraph
        </p>
        <button>Set Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
