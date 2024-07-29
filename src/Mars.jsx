import Information from "./Information";
import styles from "./Mars.module.css";
function Mars() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}> 4. Mars </div>
          <div className={styles.explanation}>
            Mars, often referred to as the "Red Planet," is the fourth planet
            from the Sun and has captivated human imagination for centuries with
            its reddish appearance and potential for hosting life.{" "}
          </div>
        </div>
        <div className={styles.moon}>
          <div className={styles.moontitle}> Martian Moons</div>
          <div className={styles.moondescription}>
            Mars has two small moons, Phobos and Deimos, which are irregularly
            shaped and thought to be captured asteroids.
          </div>
        </div>
        <div className={styles.images}>
          <img src="images/Mars.png" alt="Mars" className={styles.mars} />
          <img src="images/arrow2.png" alt="arrow" className={styles.arrow} />
        </div>
      </div>
      <div className={styles.information}>
        <Information
          src="images/donut_large.png"
          alt="donut"
          content1="Diameter"
          content2="4,212 Miles"
        />
        <Information
          src="images/Thermometer.png"
          alt="Thermometer"
          content1="Day Time Temperature"
          content2="±20° Celcius"
        />
        <Information
          src="images/green_thermometer.png"
          alt="Thermometer"
          content1="Night Time Temperature"
          content2="-73° Celcius"
        />
      </div>
    </div>
  );
}

export default Mars;
