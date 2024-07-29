import styles from "./Footer.module.css";
import Navbar from "./Navbar";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Join the Education Comunity</div>
        <div className={styles.explanation}>
          Join the Education Community today and be part of a movement that's
          transforming minds and shaping tomorrows.
        </div>
      </div>
      <div className={styles.details}>
        <input
          type="text"
          placeholder="Enter your email"
          className={styles.enter}
        />
        <button className={styles.button}>
           <div>
            Subscribe <div className={styles.arrow}> </div>
          </div>{" "}
        </button>
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
    </div>
  );
}

export default Footer;
