import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.bar}>
        <img src="images/leaf.png" className={styles.logo} alt="logo"></img>
        <span className={styles.title}> Galatico.io </span>
      </div>
      <div className={styles.menu}>
        <Link
          to="mercury"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Mercury
        </Link>
        <Link
          to="venus"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Venus
        </Link>
        <Link
          to="earth"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Earth
        </Link>
        <Link
          to="mars"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Mars
        </Link>
        <Link
          to="jupiter"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Jupiter
        </Link>
        <Link
          to="saturn"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Saturn
        </Link>
        <Link
          to="uranus"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Uranus
        </Link>
        <Link
          to="neptune"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.link}
          >
          Neptune
        </Link>
      </div>
      <div className={styles.trademark}>
        <p> @2023 SolarSystemDesign </p>
      </div>
    </div>
  );
}

export default Navbar;
