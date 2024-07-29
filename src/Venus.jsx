/* eslint-disable react/no-unescaped-entities */
import Information from "./Information";
import styles from "./Venus.module.css";
function Venus() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title}> 2. Venus </div>
        <br />
        <br />
        <div className={styles.explanation}>
          Venus is often referred to as Earth's "sister planet" due to its
          similar size and composition, but it stands out with its extremely
          inhospitable environment
        </div>
        <br />
        <br />
        <div className={styles.cards}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="7,521 Miles"
          />
          <Information
            src="images/Thermometer.png"
            akt="Thermometer"
            content1="Temperature"
            content2="±475° Celcius"
          />
        </div>
      </div>
      <div className={styles.image}>
        <img src="images/Venus.png" alt="Venus" className={styles.venus} />
      </div>
    </div>
  );
}

export default Venus;
