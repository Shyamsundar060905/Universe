import Information from "./Information";
import styles from "./Sun.module.css";
function Sun() {
  return (
    <div className={styles.position}>
      <img src="images/sun.png" alt="Sun" className={styles.sun} />
      <div className={styles.content}>
        <p> .Sun </p>
        <span>
          The Sun is a huge, glowing ball of hot plasma at the centre of our
          solar system and provides the vital energy needed for life on Earth.
          This energy radiates outward in the form of light and heat, providing
          warmth and light to the entire solar system.
        </span>
        <div className={styles.information}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="870,000 Miles"
          />
          <Information
            src="images/Thermometer.png"
            akt="Thermometer"
            content1="Temperature"
            content2="±5500° Celcius"
          />
        </div>
      </div>
    </div>
  );
}

export default Sun;
