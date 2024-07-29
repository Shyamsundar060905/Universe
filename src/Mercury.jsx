import Information from "./Information";
import styles from "./Mercury.module.css";
function Mercury() {
  return (
    <div className={styles.container}>
      <img src="images/Mercury.png" alt="Mercury" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.title}> 1. Mercury </p>
        <span className={styles.description}>
          Mercury is the closest planet to the Sun and is known for its extreme
          temperatures and barren, rocky surface. It is one of the four
          terrestrial planets in our solar system, characterized by their solid,
          rocky composition.
        </span>
        <br />
        <br />
        <div className={styles.information}>
          <div>
            <Information
              src="images/donut_large.png"
              alt="donut"
              content1="Diameter"
              content2="3,032 Miles"
            />
            <Information
              src="images/green_thermometer.png"
              alt="Thermometer"
              content1="Night Time Temperature"
              content2="-180° Celcius"
            />
          </div>
          <div>
            <Information
              src="images/Thermometer.png"
              alt="Thermometer"
              content1="Day Time Temperature"
              content2="±430° Celcius"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mercury;
