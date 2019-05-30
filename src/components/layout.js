import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/global.scss"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
