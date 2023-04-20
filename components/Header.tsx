import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Header.module.css";

export default function Header() {
  const name = useSelector((state: { name: { name: string } }) => state.name.name);
  const [ websiteURL ] = useState("https://not-boring-ds-names.vercel.app");
  const tweet = name ? name + " — generated Not Boring Design System Names, a fun way to find a name for your design system by @specifyapp💜%0A%0ACheck it out: " + websiteURL : "Not Boring Design System Names, a fun way to find a name for your design system by @specifyapp💜%0A%0ACheck it out: " + websiteURL;

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className="body-2-l text-high-emphasis">Not Boring Design System Names</h1>
        <p className="body-2-s text-medium-emphasis">by</p>
        <Link href="https://specifyapp.com" target="_blank">
          <div className={styles.logo}></div>
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" className="body-2-m text-medium-emphasis">Index</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about" className="body-2-m text-medium-emphasis">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"https://twitter.com/intent/tweet?text=" + tweet} className="body-2-m text-medium-emphasis">Share</Link>
        </li>
      </ul>
    </header>
  );
}