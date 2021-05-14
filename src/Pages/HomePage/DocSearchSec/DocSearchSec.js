import React from "react";
import DoctorCard from "../../../Components/DoctorCard/DoctorCard";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import styles from "./DocSearchSec.module.scss";

function DocSearchSec() {
  return (
    <div className={styles.searchArea}>
      <SearchBar />
      <div className={styles.doctorsArea}>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
}

export default DocSearchSec;
