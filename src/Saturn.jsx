import Information from "./Information";
import styles from "./Saturn.module.css";
function Saturn() {
  return (
    <div className={styles.container}>
      <img src="images/Saturn1.png" className={styles.image} alt="Saturn" />
      <div className={styles.content}>
        <div className={styles.title}>6. Saturn</div>
        <div className={styles.explanation}>
          Saturn, often referred to as the "Ringed Planet," is known for its
          stunning system of rings that encircle the planet's equator. It's the
          sixth planet from the Sun and is one of the most visually distinctive
          objects in our solar system, with more than 80 known satellites.
        </div>
        <div className={styles.information}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="74,898 Miles"
          />
          <Information
            src="images/green_thermometer.png"
            alt="Thermometer"
            content1="Temperature"
            content2="-139° Celcius"
          />
        </div>
      </div>
    </div>
  );
}

export default Saturn;
