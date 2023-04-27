import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Maker.module.css";

interface MakerProps {
  name: string;
  role: string;
  path: string;
  link: string;
}

export default function Maker({ name, role, path, link }: MakerProps) {
  return (
    <Link className={styles.maker} href={link} target="_blank">
      <div className={styles.image}>
        <Image
          src={require(`../public/images/${path}`)}
          alt={name}
          width={32}
          height={32}
        />
      </div>
      <div className={styles.informations}>
        <p className="body-2-l text-high-emphasis" >{name}</p>
        <p className="body-2-s text-medium-emphasis">{role}</p>
      </div>
    </Link>
  );
}