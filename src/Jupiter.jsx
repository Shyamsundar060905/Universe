import styles from "./Jupiter.module.css";
import Information from "./Information";
function Jupiter() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.explanation}>
          <div className={styles.title}> 5. Jupiter</div>
          <div className={styles.description}>
            Jupiter, the largest planet in our solar system, is a gas giant
            known for its immense size, powerful storms, and numerous moons.
          </div>
        </div>
        <div className={styles.information}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="86,881 Miles"
          />
          <Information
            src="images/green_thermometer.png"
            alt="Thermometer"
            content1="Temperature"
            content2="-108° Celcius"
          />
        </div>
      </div>
      <img src="images/Jupiter.png" alt="Jupiter" className={styles.image} />
    </div>
  );
}

export default Jupiter;
