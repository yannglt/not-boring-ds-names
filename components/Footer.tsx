import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <p className={styles.technologies + " " + "body-2-m text-medium-emphasis"}>Powered by <Link href="https://openai.com/" target="_blank" className="body-2-l text-high-emphasis">OpenAI GPT-3</Link> and <Link href="https://vercel.com/" target="_blank" className="body-2-l text-high-emphasis">Vercel Edge Functions</Link>.</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="https://github.com/yannglt/not-boring-ds-names" target="_blank" className="body-2-m text-medium-emphasis">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_218_1932)">
                <path d="M12 2.25C6.61638 2.25 2.25 6.61556 2.25 12C2.25 16.3079 5.04337 19.9625 8.91819 21.2519C9.40487 21.3421 9.5625 21.0399 9.5625 20.7831V18.968C6.85037 19.5579 6.28569 17.8175 6.28569 17.8175C5.84206 16.6906 5.20263 16.3908 5.20263 16.3908C4.31781 15.7854 5.27006 15.7984 5.27006 15.7984C6.24913 15.8667 6.76425 16.8035 6.76425 16.8035C7.63363 18.2936 9.04494 17.863 9.6015 17.6136C9.68844 16.9839 9.94113 16.5533 10.2206 16.3103C8.05531 16.0625 5.77869 15.2264 5.77869 11.4914C5.77869 10.4262 6.15975 9.55681 6.78294 8.87431C6.68219 8.62813 6.34825 7.63606 6.878 6.29381C6.878 6.29381 7.697 6.03219 9.56006 7.29319C10.3376 7.07706 11.1713 6.969 12 6.96494C12.8287 6.969 13.6632 7.07706 14.4424 7.29319C16.3038 6.03219 17.1212 6.29381 17.1212 6.29381C17.6517 7.63688 17.3178 8.62894 17.2171 8.87431C17.8427 9.55681 18.2205 10.427 18.2205 11.4914C18.2205 15.2362 15.9398 16.0609 13.7688 16.3022C14.1182 16.6044 14.4375 17.1976 14.4375 18.1076V20.7831C14.4375 21.0423 14.5935 21.347 15.0883 21.2511C18.9599 19.9601 21.75 16.3063 21.75 12C21.75 6.61556 17.3844 2.25 12 2.25Z"/>
                </g>
              <defs>
                <clipPath id="clip0_218_1932">
                  <rect width="19.5" height="19.5" fill="white" transform="translate(2.25 2.25)"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="https://twitter.com/@specifyapp" target="_blank" className="body-2-m text-medium-emphasis">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.84156 21C6.41531 21 4.15363 20.2943 2.25 19.0767C3.86624 19.1813 6.71855 18.9308 8.49268 17.2386C5.82381 17.1161 4.6202 15.0692 4.4632 14.1945C4.68997 14.2819 5.77148 14.3869 6.382 14.142C3.31192 13.3722 2.84095 10.678 2.94561 9.85573C3.52125 10.2581 4.49809 10.3981 4.88185 10.3631C2.02109 8.31618 3.05027 5.23707 3.55613 4.57226C5.60912 7.4165 8.6859 9.01393 12.4923 9.10278C12.4205 8.78802 12.3826 8.46032 12.3826 8.12373C12.3826 5.70819 14.3351 3.75 16.7435 3.75C18.0019 3.75 19.1358 4.28457 19.9318 5.13963C20.7727 4.94258 22.0382 4.4813 22.6569 4.0824C22.3451 5.20208 21.3742 6.13612 20.7869 6.48231C20.7918 6.49408 20.7821 6.47048 20.7869 6.48231C21.3028 6.40428 22.6986 6.13603 23.25 5.76192C22.9773 6.39094 21.948 7.4368 21.1033 8.02232C21.2605 14.9535 15.9574 21 8.84156 21Z"/>
            </svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
}