import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "../styles/Header.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu((menu) => !menu);
    document.body.classList.toggle("noScroll");
  };

  const name = useSelector((state: { name: { name: string } }) => state.name.name);
  const websiteURL = "https://not-boring-ds-names.vercel.app";
  const tweet = name ? "%22" + name + "%22 — generated by Not Boring Design System Names, a fun way to find a name for your design system by @specifyapp💜%0A%0ACheck it out: " + websiteURL : "Not Boring Design System Names, a fun way to find a name for your design system by @specifyapp💜%0A%0ACheck it out ⚡ " + websiteURL;

  return (
    <header className={`${styles.header} ${menu ? styles.menuExpanded : ''}`}>
      <div className={styles.title}>
        <Link className="body-2-l text-high-emphasis" href="/">Not Boring Design System Names</Link>
        <div className={styles.author}>
          <p className="body-2-s text-medium-emphasis">by</p>
          <Link href="https://specifyapp.com" target="_blank">
            <div className={styles.logo}></div>
          </Link>
        </div>
        <div className={styles.menuTrigger} onClick={handleToggle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clip-rule="evenodd" d="M3 5.00132C3 4.58711 3.33579 4.25132 3.75 4.25132H16.25C16.6642 4.25132 17 4.58711 17 5.00132C17 5.41554 16.6642 5.75132 16.25 5.75132H3.75C3.33579 5.75132 3 5.41554 3 5.00132ZM3 10.0013C3 9.58711 3.33579 9.25132 3.75 9.25132H16.25C16.6642 9.25132 17 9.58711 17 10.0013C17 10.4155 16.6642 10.7513 16.25 10.7513H3.75C3.33579 10.7513 3 10.4155 3 10.0013ZM3 15.0013C3 14.5871 3.33579 14.2513 3.75 14.2513H16.25C16.6642 14.2513 17 14.5871 17 15.0013C17 15.4155 16.6642 15.7513 16.25 15.7513H3.75C3.33579 15.7513 3 15.4155 3 15.0013Z" fill="#788BA5" />
          </svg>
        </div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/" className="body-2-m text-medium-emphasis" onClick={handleToggle}>Index</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about" className="body-2-m text-medium-emphasis" onClick={handleToggle}>About</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={"https://twitter.com/intent/tweet?text=" + tweet} className="body-2-m text-medium-emphasis" target="_blank" onClick={handleToggle}>Share</Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <Link className="button button-large button-primary" href="https://specifyapp.com" target="_blank">Learn more about Specify
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 3.75134C11.8 4.16556 12.1358 4.50134 12.55 4.50134H14.9393L8.96967 10.471C8.67678 10.7639 8.67678 11.2388 8.96967 11.5317C9.26256 11.8246 9.73744 11.8246 10.0303 11.5317L16 5.562V7.95134C16 8.36556 16.3358 8.70134 16.75 8.70134C17.1642 8.70134 17.5 8.36556 17.5 7.95134V3.75134C17.5 3.33713 17.1642 3.00134 16.75 3.00134H12.55C12.1358 3.00134 11.8 3.33713 11.8 3.75134Z" />
              <path d="M6.25 5.25134C4.73122 5.25134 3.5 6.48256 3.5 8.00134V14.2513C3.5 15.7701 4.73122 17.0013 6.25 17.0013H12.75C14.2688 17.0013 15.5 15.7701 15.5 14.2513V11.0013C15.5 10.5871 15.1642 10.2513 14.75 10.2513C14.3358 10.2513 14 10.5871 14 11.0013V14.2513C14 14.9417 13.4404 15.5013 12.75 15.5013H6.25C5.55964 15.5013 5 14.9417 5 14.2513V8.00134C5 7.31099 5.55964 6.75134 6.25 6.75134H9.5C9.91421 6.75134 10.25 6.41556 10.25 6.00134C10.25 5.58713 9.91421 5.25134 9.5 5.25134H6.25Z" />
            </svg>
          </Link>
          <Link className="button button-large button-secondary" href="https://specifyapp.com" target="_blank">View code
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 3.75134C11.8 4.16556 12.1358 4.50134 12.55 4.50134H14.9393L8.96967 10.471C8.67678 10.7639 8.67678 11.2388 8.96967 11.5317C9.26256 11.8246 9.73744 11.8246 10.0303 11.5317L16 5.562V7.95134C16 8.36556 16.3358 8.70134 16.75 8.70134C17.1642 8.70134 17.5 8.36556 17.5 7.95134V3.75134C17.5 3.33713 17.1642 3.00134 16.75 3.00134H12.55C12.1358 3.00134 11.8 3.33713 11.8 3.75134Z" />
              <path d="M6.25 5.25134C4.73122 5.25134 3.5 6.48256 3.5 8.00134V14.2513C3.5 15.7701 4.73122 17.0013 6.25 17.0013H12.75C14.2688 17.0013 15.5 15.7701 15.5 14.2513V11.0013C15.5 10.5871 15.1642 10.2513 14.75 10.2513C14.3358 10.2513 14 10.5871 14 11.0013V14.2513C14 14.9417 13.4404 15.5013 12.75 15.5013H6.25C5.55964 15.5013 5 14.9417 5 14.2513V8.00134C5 7.31099 5.55964 6.75134 6.25 6.75134H9.5C9.91421 6.75134 10.25 6.41556 10.25 6.00134C10.25 5.58713 9.91421 5.25134 9.5 5.25134H6.25Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}