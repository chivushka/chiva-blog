import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "./components/themeToggle/themeToggle";
import AuthLinks from "./components/authLinks/authLinks";

const Navbar = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>chivablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="">Home</Link>
        <Link href="">Contact</Link>
        <Link href="">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
