import React from "react";
import logo from "../../Images/doctor.png";
import styles from "./MainNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { openSubMenu } from "./MainNavMech";

function MainNav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.MainNav}>
        <div className={styles.logo}>
          <img src={logo} />
          <h3>Doctors Planet</h3>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={"#"}>Home</a>
            </li>
            <li>
              <a href={"#"}>Portfolio</a>
            </li>
            <li>
              <a href={"#"}>Skills</a>
            </li>
            <li>
              <a href={"#"}>Resume</a>
            </li>
            <li>
              <a href={"#"}>Contack</a>
            </li>
          </ul>
        </div>
        <div className={styles.userSection}>
          <button className={styles.login}>
            <FontAwesomeIcon icon={faUser} />
            <span>Account</span>
          </button>
          <button
            className={styles.menu}
            onClick={(e) => {
              openSubMenu(e, styles.subNav);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <div className={styles.subNav} style={{ display: "none" }}>
        <ul>
          <li>
            <a href={"#"}>Home</a>
          </li>
          <li>
            <a href={"#"}>Portfolio</a>
          </li>
          <li>
            <a href={"#"}>Skills</a>
          </li>
          <li>
            <a href={"#"}>Resume</a>
          </li>
          <li>
            <a href={"#"}>Contack</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNav;
