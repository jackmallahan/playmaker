import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <span>
          Created For Coaches by&nbsp;
          <a
            href="https://www.github.com/jackmallahan"
            target="_blank"
            rel="noopener"
          >
            Jack Mallahan
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
