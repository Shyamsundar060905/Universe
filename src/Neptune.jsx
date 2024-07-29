import Information from "./Information";
import Footer from "./Footer";
import styles from "./Neptune.module.css";
function Neptune() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}> 8. Neptune</div>
          <div className={styles.explanation}>
            Neptune, often called the "Blue Giant," is the eighth and farthest
            planet from the Sun in our solar system. It is a gas giant known for
            its striking blue color and turbulent atmosphere.
          </div>
        </div>
        <div className={styles.information}>
          <Information
            src="images/donut_large.png"
            alt="donut"
            content1="Diameter"
            content2="30,775 Miles"
          />
          <Information
            src="images/green_thermometer.png"
            alt="Thermometer"
            content1="Temperature"
            content2="-218° Celcius"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <img src="images/Neptune.png" alt="Neptune" className={styles.image} />
    </div>
  );
}

export default Neptune;
