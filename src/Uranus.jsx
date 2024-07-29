import Information from "./Information";
import styles from "./Uranus.module.css";
function Uranus() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}> 7. Uranus </div>
          <div className={styles.explanation}>
            Uranus, often referred to as the "Ice Giant," is a unique and
            mysterious planet in our solar system. It stands out due to its
            distinct blue-green color and its unusual rotation axis.
          </div>
        </div>
        <div className={styles.information}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="31,518 Miles"
          />
          <Information
            src="images/green_thermometer.png"
            alt="Thermometer"
            content1="Temperature"
            content2="-224° Celcius"
          />
        </div>
      </div>
      <img src="images/Uranus.png" alt="Uranus" className={styles.image} />
    </div>
  );
}

export default Uranus;
