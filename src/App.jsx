import { Element } from "react-scroll";
import styles from "./App.module.css";
import Firstpage from "./Firstpage";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

export default function App() {
  return (
    <div className={styles.background}>
      <Firstpage />
      <Element name="sun">
        <Sun />
      </Element>
      <Element name="mercury">
        <Mercury />
      </Element>
      <Element name="venus">
        <Venus />
      </Element>
      <Element name="earth">
        <Earth />
      </Element>
      <Element name="mars">
        <Mars />
      </Element>
      <Element name="jupiter">
        <Jupiter />
      </Element>
      <Element name="saturn">
        <Saturn />
      </Element>
      <Element name="uranus">
        <Uranus />
      </Element>
      <Element name="neptune">
        <Neptune />
      </Element>
    </div>
  );
}
