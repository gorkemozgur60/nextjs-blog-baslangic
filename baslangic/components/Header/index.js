import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Header(){
    return <header className={styles.header}>
        <Link href="/"><span className={styles.logo}>BLOG</span></Link>
        <nav>
            <Link href="https://github.com/gorkemozgur60" target="_blank">
            About
            </Link>
        </nav>
    </header>;
}
export default Header;