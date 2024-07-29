/* eslint-disable react/no-unescaped-entities */
import styles from "./FirstPage.module.css";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
function Firstpage() {
  return (
    <div className={styles.position}>
      <Navbar />
      <img src="images/Earth.png" alt="Earth" className={styles.earth} />
      <div className={styles.title}>
        <p>Let's get to know our solar system galaxy </p>
        <span>
          Embark on a cosmic journey across the ethereal expanse of the solar
          system Galaxy and follow the orchestration of the cosmos and the
          planets weaving stories of their timeless existence.
        </span>
        <br />
        <Link
          to="sun"
          smooth={true}
          duration={500}
          className={styles.learnmore}
        >
          Learn more ↓
        </Link>
      </div>
      <img src="images/planet1.png" alt="Planet" className={styles.planet1} />
      <img src="images/planet2.png" alt="Planet" className={styles.planet2} />
      <img src="images/moon.png" alt="moon" className={styles.moon} />
      <img src="images/moon1.png" alt="Moon" className={styles.moon1} />
      <img src="images/saturn.png" className={styles.saturn} alt="Saturn" />
      <img src="images/planet3.png" className={styles.planet3} alt="Planet" />
    </div>
  );
}

export default Firstpage;
