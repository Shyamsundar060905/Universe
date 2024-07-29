import styles from "./Information.module.css";
function Information({ src, alt, content1, content2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={src} alt={alt} className={styles.imageinside} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.text}> {content1} </h1>
        <h1 className={styles.text1}> {content2} </h1>
      </div>
    </div>
  );
}

export default Information;
