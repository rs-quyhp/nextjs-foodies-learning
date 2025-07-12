const { default: Link } = require("next/link");
import logo from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={logo} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
