import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className={styles.searchBarWrapper}>
      <input type="text" placeholder="Doctor's Name" id="docNameSearch" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
