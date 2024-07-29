/* eslint-disable react/no-unescaped-entities */
import styles from "./Earth.module.css";
import Information from "./Information";
function Earth() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title}> 3. Earth </div>
        <br />
        <br />
        <div className={styles.explanation}>
          Earth is the third planet from the Sun and the only known planet to
          support life. Earth is the only planet known to harbor life. It's a
          diverse and dynamic world with a wide range of ecosystems, climates,
          and geological features.
          <div className={styles.information}>
            <Information
              src="images/donut_large.png"
              alt="donut"
              content1="Diameter"
              content2="7,918 Miles"
            />
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img src="images/rocket.png" alt="Rocket" className={styles.rocket} />
        <img src="images/Earth1.png" alt="Earth" className={styles.Earth} />
        <img src="images/arrow.png" alt="Earth" className={styles.arrow} />
        <div className={styles.earthmoon}>
          <h3 className={styles.name}> Moon Planet </h3>
          <span className={styles.moon}>
            Earth has one natural satellite, the Moon, which plays a role in
            stabilizing the planet's rotation and tides. The Moon's
            gravitational pull causes ocean tides to rise and fall.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Earth;
