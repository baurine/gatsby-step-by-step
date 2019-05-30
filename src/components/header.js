import React from "react"
import { Link } from "gatsby"

import logo from "../images/pingcap-logo.png"

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="pingcap" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="cases">cases</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
