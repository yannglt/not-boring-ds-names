import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className="body-2-l text-high-emphasis">Not Boring Design System Names</h1>
        <p className="body-2-s text-medium-emphasis">by</p>
        <Image
          alt="Specify Logo"
          src="/images/specify-logo.svg"
          className={styles.logo}
          width={76}
          height={24}
        />
        {/* <img className={styles.logo} src="/images/specify-logo.svg"/> */}
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" className="body-2-m text-medium-emphasis">Index</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/" className="body-2-m text-medium-emphasis">About</Link>
        </li>
      </ul>
    </header>
  );
}