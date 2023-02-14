import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../../public/images/logo/logo.svg";

const Index = () => {

  const menu = [
    {
      title: "about",
      link: "./about"
    },
    {
      title: "Home",
      link: "./"
    }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={Logo.src} alt="Qonto" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Index;
