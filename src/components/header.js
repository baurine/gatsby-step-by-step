import React from "react"
import { Link } from "gatsby"

import logo from "../images/pingcap-logo.png"

import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.container}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="pingcap" />
    </Link>
    <nav>
      <ul className={styles.nav_links}>
        <li>
          <Link to="cases">Cases</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
