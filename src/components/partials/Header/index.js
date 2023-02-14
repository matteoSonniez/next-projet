import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../../public/images/logo/logo.svg";

const Index = () => {

  const menu = [
    {
      title: "Home",
      link: "./"
    },
    {
      title: "About",
      link: "./about"
    },
  ]

  return (
    <div className={`${styles.wrapper} flex`}>
      <div className={styles.logo}>
        <img src={Logo.src} alt="Qonto" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {
            menu.map(item => (
              <li className={styles.nav__item}>
                <Link href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Index;
